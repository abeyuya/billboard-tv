import React from 'react';
import YouTube from 'react-youtube';

export default class YoutubePlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      player: null
    };
    
    this.onReady = this.onReady.bind(this);
    // this.onChangeVideo = this.onChangeVideo.bind(this);
    // this.onPlayVideo = this.onPlayVideo.bind(this);
    // this.onPauseVideo = this.onPauseVideo.bind(this);
  };

  onReady(event) {
    this.setState({player: event.target});
    this.state.player.playVideo();
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
      <YouTube videoId={this.props.now_playing_video_id} onReady={this.onReady} opts={opts} />
    );
  };
};
