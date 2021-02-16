import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return(
      <nav className="navigation">
        <Link className="back" to="/projects">
          <div className="back__button">WORK</div>
          <div className="back__shadow"></div>
        </Link>
      </nav>
    )
  }
}

export default Navigation;
