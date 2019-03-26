import React, { Component } from "react";
import { Link, NavLink, withRouter } from 'react-router-dom'
import { FaDollarSign } from "react-icons/fa";

class NavigationTop extends Component {
  render() {
    return (
      <nav className="nav-wrapper green darken-3">
        <div className="container">
          <Link className="brand-logo" to="/"><FaDollarSign className="custom-dollar-sign z-depth-3"/></Link>
          <ul className="right">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to='/transactions'>Transactions</NavLink></li>
            <li><NavLink to='/trends'>Trends</NavLink></li>
            <li><NavLink to='/login'>Logout</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavigationTop);
