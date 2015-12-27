'use strict';

var React = require('react');

class YoutubePlayer extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      player: null
    };
  };
  
  componentDidMount(){
    // console.log('didMount');
    // var player = YoutubePlayerLib('youtube_player');
    // this.setState({player:player});
    // if (this.props.now_playing_video_id !== null && player !== null) {
    //   // console.log('now_playing_video_id: ' + this.props.now_playing_video_id);
    //   console.log('player: ' + player);
    //   this.state.player.loadVideoById(this.props.now_playing_video_id);
    // }
    
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var self_obj = this;
    
    window.onYouTubePlayerAPIReady = function() {
      console.log('ready youtube');
      var player = new YT.Player('ytplayer', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
          'onReady': self_obj.onPlayerReady,
          'onStateChange': self_obj.onPlayerStateChange
        }
      });
      self_obj.setState({player:player});
      console.log('player: ' + self_obj.state.player);
    }
  };
  
  onPlayerReady(){
    console.log('player ready!!');
  };
  
  // onReady(event) {
  //   console.log(`YouTube Player object for videoId: "${this.props.now_playing_video_id}" has been saved to state.`); // eslint-disable-line
  //   this.setState({
  //     player: event.target,
  //   });
  // }
  
  render() {
    // console.log('date: ' + this.props.now_playing_video_id);
    return (
      <div className="ytplayer"></div>
    );
  };
};

module.exports = YoutubePlayer;
