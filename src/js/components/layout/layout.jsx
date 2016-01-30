import React from 'react'
import GoogleAnalytics from 'react-g-analytics'
import Navigation from './navigation.jsx'
import Footer from './footer.jsx'

export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <Navigation />
        {this.props.children}
        <Footer />
        <GoogleAnalytics id="xxxx" />
      </div>
    )
  }
}
