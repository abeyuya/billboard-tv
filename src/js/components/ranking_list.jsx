import React from 'react';

export default class RankingList extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    // console.log('ranking_list:' + this.props.ranking_list);
    var list = this.props.ranking_list.map(function(record){
      // var onTapSong = this.props.onTapSong();
      return (
        <ul key={record.rank}>
          <li>{record.rank}</li>
          <li>{record.artist}</li>
          <li>{record.title}</li>
          <li onClick={console.log('video_id:' + record.video_id)}>{record.video_id}</li>
        </ul>
      );
    });
    // console.log('list:' + list);
    return (
      <div className="ranking_list">
        {list}
      </div>
    );
  }
};
