import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return(
      <nav className="navigation">
        <ul className="navigation__links">
          <li><Link className="navigation__links__link" to="/">Me</Link></li>
          <li><Link className="navigation__links__link" to="/projects">Projects</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
