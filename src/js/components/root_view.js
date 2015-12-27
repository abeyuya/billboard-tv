var React = require('react');
var request = require('superagent');

var RankingList = require('./ranking_list.js');
var RankingDate = require('./ranking_date.js');


var RootView = React.createClass({
  getInitialState:function(){
    return {
      ranking_date: '',
      ranking_list: []
    };
  },
  componentDidMount:function(){
    // console.log('didMount');
    this.fetchRankingJson();
  },
  fetchRankingJson:function(){
    request.get('/ranking.json')
    .end(function(err, res){
      if (err) { alert(res.text); }
      // console.log(res.body);
      this.setState({ranking_date: res.body.date});
      this.setState({ranking_list: res.body.ranking});
    }.bind(this));
  },
  render:function(){
    return (
      <div className="root_view">
        <RankingDate ranking_date={this.state.ranking_date} />
        <RankingList ranking_list={this.state.ranking_list} />
      </div>
    );
  }
});

module.exports = RootView;
