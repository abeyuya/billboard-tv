import React    from 'react'
import ReactDom from 'react-dom'
import Layout   from './components/layout/layout.jsx'
import Index    from './components/index/root_view.jsx'
import About    from './components/about/about.jsx'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index} />
      <Route path="index" component={Index} />
      <Route path="about" component={About} />
    </Route>
  </Router>),
  document.getElementById('container')
);
