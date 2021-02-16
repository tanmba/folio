import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Work extends Component {
  render() {
    return(
      <React.Fragment>
        <Link className="back" to="/projects">
          <div className="back__button">BACK</div>
          <div className="back__shadow"></div>
        </Link>
        <div className="work">
          <p>Coming soon...</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Work;
