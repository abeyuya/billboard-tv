import React from 'react';

export default class RankingList extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    // console.log('ranking_list:' + this.props.ranking_list);
    var list = this.props.ranking_list.map(function(record){
      return (
        <li key={record.rank} onClick={
            function(){ this.props.onTapSong(record.rank) }.bind(this)
          }>
          {record.rank}: {record.artist} : {record.title}
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
