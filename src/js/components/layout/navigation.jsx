import React from 'react'
import { Link } from 'react-router'

export default class Navigation extends React.Component {
  render(){
    return(
      <nav className="navigation">
        <Link to="/">BILLBOARD-TV</Link>
      </nav>
    )
  }
}
