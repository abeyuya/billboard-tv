import React from 'react'
import GoogleAnalytics from 'react-g-analytics'
import Navigation from './navigation.jsx'

export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <Navigation />
        {this.props.children}
        <footer>
          <p>footerだよ</p>
        </footer>
        <GoogleAnalytics id="xxxx" />
      </div>
    )
  }
}
