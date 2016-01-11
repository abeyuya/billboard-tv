import React from 'react';

export default class RankingDate extends React.Component {
  styles() {
    return {
      fontSize: '1.1em',
      fontWeight: 'bold'
    };
  }
  
  render() {
    // console.log('date: ' + this.props.ranking_date);
    return (
      <p>
        Ranking of <span style={this.styles()}>{this.props.ranking_date}</span>
      </p>
    );
  }
};
