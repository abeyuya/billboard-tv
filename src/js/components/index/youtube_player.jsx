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

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <YouTube
        videoId={this.getVideoId()}
        onReady={this.onReady}
        onStateChange={this.onStateChange}
        opts={opts} />
    );
  };
};
