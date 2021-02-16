import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Stuff extends Component {
  render() {
    return(
      <React.Fragment>
        <Link className="back" to="/">
          <div className="back__button">BACK</div>
          <div className="back__shadow"></div>
        </Link>
         <section className="stuffs">
          <div className="stuffs__cards">
            <div class="stuffs__cards__card">
              <div className="stuffs__cards__card__header">RESUME</div>
              <div className="stuffs__cards__card__body">
                <p>More about my experiences and passions</p>
                <Link to="/resume">
                  <div className="stuffs__cards__card__body__button">MORE</div>
                  <div className="stuffs__cards__card__body__shadow"></div>
                </Link>
              </div>
            </div>
            <div class="stuffs__cards__card">
              <div className="stuffs__cards__card__header">STUFF</div>
              <div className="stuffs__cards__card__body">
                <p>More about my personnal work</p>
                <Link to="/personnal">
                  <div className="stuffs__cards__card__body__button">MORE</div>
                  <div className="stuffs__cards__card__body__shadow"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Stuff;
