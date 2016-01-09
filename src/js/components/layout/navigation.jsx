import React from 'react'
import { Link } from 'react-router'
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export default class Navigation extends React.Component {
  render(){
    return(
      <nav>
        <ul>
          <li>ヘッダーだよ</li>
          <li><Link to="/index">Index</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    )
  }
}
