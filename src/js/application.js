var React = require('react');
var ReactDom = require('react-dom');

var RankingList = React.createClass({
  render: function() {
    return (
      <div className="ranking_list">
        Hello, world! I am a ranking_list.
      </div>
    );
  }
});

ReactDom.render(
  <RankingList />,
  document.getElementById('todo-app')
);
