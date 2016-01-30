import React from 'react';

export default class RankingList extends React.Component {
  constructor(props){
    super(props);
  }
  
  styles(target) {
    if (target === 'table') {
      return {
        height: '470px',
        overflow: 'scroll'
      }
    }
    
    if (target === 'title') {
      return {
        fontSize: '1.0em',
        fontWeight: 'bold'
      }
    }
    
    if (target === 'artist') {
      return {
        fontSize: '0.8em',
        fontWeight: 'normal'
      }
    }
    
    if (target === 'img') {
      return {
        width: '90px'
      }
    }
    
    if (target === 'rank') {
      return {
        width: '18px',
        textAlign: 'right'
      }
    }
    
    if (target === 'date') {
      return {
        fontSize: '1.1em',
        fontWeight: 'bold'
      };
    }
  }
  
  render() {
    // console.log('ranking_list:' + this.props.ranking_list);
    var list = this.props.ranking_list.map(function(record){
      var url = 'http://i.ytimg.com/vi/' + record.video_id + '/default.jpg';
      return (
        <tr key={record.rank}
          onClick={ function(){ this.props.onTapSong(record.rank) }.bind(this) }>
          <td>
            <div> {record.rank} </div>
            <img src={url}/>
            <span>{record.title}</span><br />
            <span>by {record.artist}</span>
          </td>
        </tr>
      );
    }, this);
    // console.log('list:' + list);
    return (
      <div className="youtube__ranking_list">
        <p>Ranking of {this.props.ranking_date}</p>
        <div className="youtube__ranking_list--table">
          <table>
            <tbody>
              {list}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
