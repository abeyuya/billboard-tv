import React from 'react';

export default class NowPlaying extends React.Component {
  constructor(props){
    super(props);
  };
  
  render() {
    var record = this.props.ranking_list[this.props.now_playing_id - 1];
    if (record === undefined) return null;
    // console.log('record:' + record);
    // console.log('ranking_list:' + this.props.ranking_list);
    // console.log('now_playing_id:' + this.props.now_playing_id);
    return (
      <div className="youtube__now_playing">
        <p className="youtube__now_playing--rank">{this.props.now_playing_id}</p>
        <p className="youtube__now_playing--title">{record.title}</p>
        <p className="youtube__now_playing--artist">{record.artist}</p>
      </div>
    );
  };
};
