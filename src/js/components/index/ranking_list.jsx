import React from 'react';

export default class RankingList extends React.Component {
  constructor(props){
    super(props);
  }
  
  styles() {
    return {
      height: '500px',
      overflow: 'scroll'
    }
  }
  
  render() {
    // console.log('ranking_list:' + this.props.ranking_list);
    var list = this.props.ranking_list.map(function(record){
      var url = 'http://i.ytimg.com/vi/' + record.video_id + '/default.jpg';
      return (
        <tr key={record.rank} className="media" onClick={
            function(){ this.props.onTapSong(record.rank) }.bind(this)
          }>
          <td>
            <div className="media-left">
              <img src={url} className="media-object" />
            </div>
          </td>
          <td>
            <div className="media-body">
              {record.rank}: {record.artist} : {record.title}
            </div>
          </td>
        </tr>
      );
    }, this);
    // console.log('list:' + list);
    return (
      <div style={this.styles()}>
        <table className="table">
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    );
  }
};
