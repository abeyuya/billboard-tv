var React = require('react');
var request = require('superagent');

var RankingList = React.createClass({
  getInitialState() {
    return {
      ranking_date: '',
      ranking_list: []
    };
  },
  componentDidMount:function(){
    // console.log('didMount');
    this.fetchRankingJson();
  },
  fetchRankingJson:function() {
    request.get('/ranking.json')
    .end(function(err, res){
      if (err) { alert(res.text); }
      // console.log(res.body);
      this.setState({ranking_date: res.body.date});
      this.setState({ranking_list: res.body.ranking});
    }.bind(this));
  },
  render: function() {
    // console.log('ranking_list:' + this.state.ranking_list);
    // this.fetchRankingJson();
    var list = this.state.ranking_list.map(function(record){
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
        <h1>{this.state.date}</h1>
        {list}
      </div>
    );
  }
});

module.exports = RankingList;
