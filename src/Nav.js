import React from 'react'
import {Router, Route, IndexRoute, Redirect, Link} from 'react-router'

export default React.createClass({
  render() {
    return    <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">DI Demo</a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                <Link to="/Dashboard">Dashboard</Link>
                </li>
                <li>
                <Link to="/Add">New widget</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

  }
})
