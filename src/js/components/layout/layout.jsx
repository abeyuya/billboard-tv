import React from 'react'
import { Link } from 'react-router'
import GoogleAnalytics from 'react-g-analytics'

export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <nav>
          <ul>
            <li>ヘッダーだよ</li>
            <li><Link to="/inbox">Inbox</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        {this.props.children}
        <footer>
          <p>footerだよ</p>
        </footer>
        <GoogleAnalytics id="xxxx" />
      </div>
    )
  }
}
