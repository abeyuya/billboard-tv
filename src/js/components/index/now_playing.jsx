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
      <div>
        <h1 style={{marginTop:'0px', fontSize:'30px'}}>
          {this.props.now_playing_id} - {record.title}<small> / {record.artist}</small>
        </h1>
      </div>
    );
  };
};
