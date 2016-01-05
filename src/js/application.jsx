import React    from 'react'
import ReactDom from 'react-dom'
import Layout   from './components/layout.jsx'
import RootView from './components/root_view.jsx'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={RootView} />
      <Route path="about" component={RootView} />
      <Route path="inbox" component={RootView} />
    </Route>
  </Router>),
  document.getElementById('container')
);
