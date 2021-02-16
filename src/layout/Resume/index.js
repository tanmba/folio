import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { init } from "ityped";
import food from '../../assets/media/food.GIF'
import ghibli from '../../assets/media/ghibli.GIF'
import pictures from '../../assets/media/pictures.GIF'
import travel from '../../assets/media/travel.GIF'
import CV from '../../assets/media/Tan-mbaTakougnadi.pdf'

class Resume extends Component {

  componentDidMount() {
    const myElement = document.querySelector(".about__title__typed");
    init(myElement, {
      showCursor: false,
      strings: ["Tan-mba", "24", "a front-end developer"]
    });
  }

  render() {
    return(
      <React.Fragment>
        <Link className="back" to="/projects">
          <div className="back__button">BACK</div>
          <div className="back__shadow"></div>
        </Link>
        <section className="about">
          <div className="about__title">I'm <span className="about__title__typed"></span></div>
          <div className="about__scroll">
            <span class="arrow-down">
            </span>
          </div>
        </section>

        <section className="resume">
          <span className="section-count">experiences</span>
          <div className="resume__element resume__experiences">
            <span className="resume__element__title">About my experiences</span>
            <div className="resume__element__description">
              <span>2017-2020</span>
              <div className="resume__element__description__infos">
                <a href="https://www.legalstart.fr/" target="__blank">Legalstart</a>
                <span>Front-end developer<br/>React.js</span>
                <p>Legalstart is an online legal services platform which goal is to allow 
                  entrepreneurs to manage all of their administrative, legal and accounting procedures 
                  alone.</p>
              </div>
            </div>
            <div className="resume__element__description">
              <span>2017</span>
              <div className="resume__element__description__infos">
                <a href>Kipic</a>
                <span>Front-end developer<br/>Angular.js</span>
                <p>Kipic is a startup that seeks to revolutionize the user experience in creating 
                  online photo albums. They use artificial intelligence to automate and enrich photo 
                  albums with data.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="education">
          <span className="section-count">education</span>
          <div className="resume__element">
            <span className="resume__element__title">About my education</span>
            <div className="resume__element__description">
              <span>2017-2020</span>
              <div className="resume__element__description__infos">
                <a href="https://www.digital-campus.fr/" target="__blank">Digital campus</a>
                <span>Technical director</span>
              </div>
            </div>
            <div className="resume__element__description">
              <span>2015-2017</span>
              <div className="resume__element__description__infos">
                <a href="https://www.hetic.net/" target="__blank">Hetic</a>
                <span>Multimedia project manager</span>
              </div>
            </div>
          </div>
        </section>

        <section className="details">
          <span className="section-count">about me</span>
          <div className="details__content">
            <span className="details__title">Some details</span>
            <div className="details__element">
              <div className="details__element__text">
                I <span>like</span> love eating asian food 
              </div>
              <div className="details__element__imgs">
                <div className="details__element__imgs__img"><img src={food} alt="" /></div>
                <div className="details__element__imgs__shadow"></div>
              </div>
            </div>
            <div className="details__element">
              <div className="details__element__text">
                Ghibli movies are my favorites
              </div>
              <div className="details__element__imgs">
                <div className="details__element__imgs__img"><img src={ghibli} alt="" /></div>
                <div className="details__element__imgs__shadow"></div>
              </div>
            </div>
            <div className="details__element">
              <div className="details__element__text">
                Always taking pictures
              </div>
              <div className="details__element__imgs">
                <div className="details__element__imgs__img"><img src={pictures} alt="" /></div>
                <div className="details__element__imgs__shadow"></div>
              </div>
            </div>
            <div className="details__element">
              <div className="details__element__text">
                Travelling again and again
              </div>
              <div className="details__element__imgs">
                <div className="details__element__imgs__img"><img src={travel} alt="" /></div>
                <div className="details__element__imgs__shadow"></div>
              </div>
            </div>
          </div>
        </section>

        <div className="footer footer--about">
          <ul className="footer__links">
            <li><a href="https://www.linkedin.com/in/tan-mbatakougnadi/" target="_blanck">Linkedin</a></li>
            <li><a href="https://www.facebook.com/people/Tan-Mba-Takougnadi/100001422870859" target="_blanck">Facebook</a></li>
            <li><a href={CV} target="_blanck">CV</a></li>
          </ul>
          <div className="footer__contact">
            <a href="mailto:tanmbatakougnadi@gmail.com" target="_blanck">Get in touch</a>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Resume;
