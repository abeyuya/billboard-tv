var React = require('react');

var RankingList = React.createClass({
  render: function() {
    // console.log('ranking_list:' + this.props.ranking_list);
    var list = this.props.ranking_list.map(function(record){
      return (
        <ul key={record.rank}>
          <li>{record.rank}</li>
          <li>{record.artist}</li>
          <li>{record.title}</li>
        </ul>
      );
    });
    // console.log('list:' + list);
    return (
      <div className="ranking_list">
        {list}
      </div>
    );
  }
});

module.exports = RankingList;
