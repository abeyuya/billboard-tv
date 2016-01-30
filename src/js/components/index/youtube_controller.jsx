import React from 'react';

export default class YoutubeController extends React.Component {
  constructor(props){
    super(props);
  };
  
  render(){
    return(
      <div>
        <a onClick={this.props.onTapRepeat}>REPEAT</a>
        <a onClick={this.props.playNextVideo}>NEXT</a>
        <a onClick={this.props.onTapRandom}>RANDOM</a>
      </div>
    );
  };
};
