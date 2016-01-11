import React from 'react'
import { Link } from 'react-router'

export default class Navigation extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">BILLBOARD-TV</Link>
          </div>
        </div>
      </nav>
    )
  }
}
