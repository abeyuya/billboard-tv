import React from 'react';

export default class YoutubeController extends React.Component {
  constructor(props){
    super(props);
  };
  
  render(){
    var repeat_class = 'youtube_controller--circle';
    if (this.props.repeat) repeat_class += '--active';
    
    var random_class = 'youtube_controller--circle';
    if (this.props.random) random_class += '--active';
    
    return(
      <div className="youtube_controller">
        <div className={repeat_class} onClick={this.props.onTapRepeat}>
          <div>REPEAT</div>
        </div>
        <div className="youtube_controller--circle" onClick={this.props.playNextVideo}>
          <div>NEXT</div>
        </div>
        <div className={random_class} onClick={this.props.onTapRandom}>
          <div>RANDOM</div>
        </div>
      </div>
    );
  };
};
