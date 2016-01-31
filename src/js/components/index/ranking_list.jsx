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
        <tr key={record.rank}
          onClick={ function(){ this.props.onTapSong(record.rank) }.bind(this) }>
          <td>
            <div className="youtube__ranking_list--table--song">
              <table>
                <tr>
                  <td className="youtube__ranking_list--table--song--rank">{record.rank}</td>
                  <td className="youtube__ranking_list--table--song--thum"><img src={url}/></td>
                  <td className="youtube__ranking_list--table--song--info">
                    <p className="youtube__ranking_list--table--song--info--title">{record.title}</p>
                    <p className="youtube__ranking_list--table--song--info--artist"><small>{record.artist}</small></p>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      );
    }, this);
    // console.log('list:' + list);
    return (
      <div className="youtube__ranking_list">
        <div className="youtube__ranking_list--header">
          <div>Ranking of {this.props.ranking_date}</div>
        </div>
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
