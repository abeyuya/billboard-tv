var React = require('react');

var RankingDate = React.createClass({
  render:function() {
    // console.log('date: ' + this.props.ranking_date);
    return (
      <div className="ranking_date">{this.props.ranking_date}</div>
    );
  }
});

module.exports = RankingDate;
