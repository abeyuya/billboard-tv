import React from 'react'
import GoogleAnalytics from 'react-g-analytics'
import Navigation from './navigation.jsx'
import Footer from './footer.jsx'

export default class Layout extends React.Component {
  styles(target) {
    if (target === 'root') {
      return {
        backgroundImage: 'url(/image/back_pattern.png)'
      };
    }
  }
  
  render(){
    return(
      <div style={this.styles('root')}>
        <Navigation />
        {this.props.children}
        <Footer />
        <GoogleAnalytics id="xxxx" />
      </div>
    )
  }
}
