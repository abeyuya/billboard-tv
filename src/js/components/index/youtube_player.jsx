import React from 'react';
import YouTube from 'react-youtube';

export default class YoutubePlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      player: null
    };
    
    this.onReady = this.onReady.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    // this.onChangeVideo = this.onChangeVideo.bind(this);
    // this.onPlayVideo = this.onPlayVideo.bind(this);
    // this.onPauseVideo = this.onPauseVideo.bind(this);
  };

  onReady(event) {
    this.setState({player: event.target});
  }
  
  onStateChange(e) {
    // console.log('onStateChange: ' + e.data);
    const finish_play_state = 0;
    
    if (e.data === finish_play_state) {
      this.props.playNextVideo();
    }
  }
  
  getVideoId() {
    // console.log('ranking_list: ' + this.props.ranking_list);
    // console.log('rank: '         + this.props.now_playing_id);
    if (this.props.ranking_list === [] || this.props.now_playing_id === null) {
      return '';
    }
    return this.props.ranking_list[this.props.now_playing_id - 1].video_id;
  }
  
  getPlayerWidth() {
    return 855;
    // var base_dom = document.getElementById('playerWidth');
    // if (base_dom === null) return 640;
    // return base_dom.clientWidth;
  }

  render() {
    const opts = {
      height: String(this.getPlayerWidth() * 0.5625), // 16:9
      width: String(this.getPlayerWidth()),
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div>
        <YouTube
          videoId={this.getVideoId()}
          onReady={this.onReady}
          onStateChange={this.onStateChange}
          opts={opts} />
        <span
          className="glyphicon glyphicon-forward"
          aria-hidden="true"
          onClick={this.props.playNextVideo}></span>
      </div>
    );
  };
};
