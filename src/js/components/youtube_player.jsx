import React from 'react';
import YouTube from 'react-youtube';

export default class YoutubePlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      now_playing_video_id: props.now_playing_video_id,
      player: null
    };
  };

  onReady(event) {
    this.setState({player: event.target});
    this.state.player.playVideo();
  }

  render() {
    return (
      <YouTube videoId="2g811Eo7K8U" onReady={this.onReady} />
    );
  };
};
