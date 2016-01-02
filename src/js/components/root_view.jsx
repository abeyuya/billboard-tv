import React         from 'react';
import request       from 'superagent';
import RankingList   from './ranking_list.jsx';
import RankingDate   from './ranking_date.jsx';
import YoutubePlayer from './youtube_player.jsx';

export default class RootView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking_date: '',
      ranking_list: [],
      now_playing_video_id: ''
    };
    // this.onTapSong = this.onTapSong.bind(this);
  }
  
  componentDidMount(){
    // console.log('didMount');
    this.fetchRankingJson();
  }
  
  fetchRankingJson(){
    request.get('/ranking.json')
    .end(function(err, res){
      if (err) { alert(res.text); }
      // console.log(res.body);
      var json = JSON.parse(res.text);
      this.setState({
        ranking_date: json.date,
        ranking_list: json.ranking,
        now_playing_video_id: json.ranking[0].video_id
      });
    }.bind(this));
  }
  
  onTapSong(video_id) {
    console.log('click video_id:' + video_id);
  }
  
  render(){
    // console.log(this.state.now_playing_video_id);
    return (
      <div className="root_view">
        <RankingDate ranking_date={this.state.ranking_date} />
        <YoutubePlayer now_playing_video_id={this.state.now_playing_video_id} />
        <RankingList ranking_list={this.state.ranking_list} onTapSong={this.onTapSong.bind(this)} />
      </div>
    );
  }
};
