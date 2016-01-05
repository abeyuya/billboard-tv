import React from 'react'
import { Link} from 'react-router'

export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <ul>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
