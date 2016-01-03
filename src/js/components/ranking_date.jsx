import React from 'react';

export default class RankingDate extends React.Component {
  render() {
    // console.log('date: ' + this.props.ranking_date);
    return (
      <h2 className="ranking_date">{this.props.ranking_date}</h2>
    );
  }
};
