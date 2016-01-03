import React         from 'react';
import request       from 'superagent';
import NowPlaying    from './now_playing.jsx';
import RankingList   from './ranking_list.jsx';
import RankingDate   from './ranking_date.jsx';
import YoutubePlayer from './youtube_player.jsx';

export default class RootView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking_date: '',
      ranking_list: [],
      now_playing_id: null
    };
    this.onTapSong = this.onTapSong.bind(this);
    this.playNextVideo = this.playNextVideo.bind(this);
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
        now_playing_id: json.ranking[0].rank
      });
    }.bind(this));
  }
  
  onTapSong(rank) {
    // console.log('click rank:' + rank);
    this.setState({now_playing_id: rank});
  }
  
  playNextVideo() {
    var now_playing_id_number = Number(this.state.now_playing_id);
    var next_id;
    if (now_playing_id_number === 100) {
      next_id = 1;
    } else {
      next_id = now_playing_id_number + 1;
    }
    this.setState({now_playing_id: next_id});
  }
  
  render(){
    // console.log(this.state.now_playing_video_id);
    return (
      <div className="root_view">
        <NowPlaying
          ranking_list={this.state.ranking_list}
          now_playing_id={this.state.now_playing_id} />
        <RankingDate
          ranking_date={this.state.ranking_date} />
        <YoutubePlayer
          ranking_list={this.state.ranking_list}
          playNextVideo={this.playNextVideo}
          now_playing_id={this.state.now_playing_id} />
        <RankingList
          ranking_list={this.state.ranking_list}
          onTapSong={this.onTapSong} />
      </div>
    );
  }
};
