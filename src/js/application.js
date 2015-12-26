var React = require('react');
var ReactDom = require('react-dom');

var RankingList = require('./components/ranking_list.js');

ReactDom.render(
  <RankingList />,
  document.getElementById('todo-app')
);
