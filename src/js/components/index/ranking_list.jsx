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
            className="media"
            onClick={
              function(){ this.props.onTapSong(record.rank) }.bind(this)
            }>
          <td>
            <div className="media-left">
              <div style={this.styles('rank')}> {record.rank} </div>
            </div>
            <div className="media-left">
              <img src={url} className="media-object" style={this.styles('img')}/>
            </div>
            <div className="media-body">
              <span style={this.styles('title')}>{record.title}</span><br />
              <span style={this.styles('artist')}>by {record.artist}</span>
            </div>
          </td>
        </tr>
      );
    }, this);
    // console.log('list:' + list);
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Ranking of <span style={this.styles('date')}>{this.props.ranking_date}</span>
        </div>
        <div style={this.styles('table')}>
          <table className="table">
            <tbody>
              {list}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
