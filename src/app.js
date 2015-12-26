var React = require('react');
var ReactDom = require('react-dom');
var util = require('./util.js');

ReactDom.render(
  <h1>Sample</h1>,
  document.getElementById('todo-app')
);

util();
