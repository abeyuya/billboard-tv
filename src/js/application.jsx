var React = require('react');
var ReactDom = require('react-dom');

var RootView = require('./components/root_view.jsx');

ReactDom.render(
  <RootView />,
  document.getElementById('container')
);
