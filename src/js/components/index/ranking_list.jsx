import React from 'react';

export default class RankingList extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    // console.log('ranking_list:' + this.props.ranking_list);
    var list = this.props.ranking_list.map(function(record){
      var url = 'http://i.ytimg.com/vi/' + record.video_id + '/default.jpg';
      return (
        <li key={record.rank} onClick={
            function(){ this.props.onTapSong(record.rank) }.bind(this)
          }>
          {record.rank}: {record.artist} : {record.title}
          <img src={url} />
        </li>
      );
    }, this);
    // console.log('list:' + list);
    return (
      <ul className="ranking_list">
        {list}
      </ul>
    );
  }
};
