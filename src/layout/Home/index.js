import React, { Component } from 'react';
import me from '../../assets/media/me.GIF'
import contact from '../../assets/media/getintouch.PNG'
import CV from '../../assets/media/Tan-mbaTakougnadi.pdf'
import Navigation from '../Navigation/index'
import MouseTooltip from 'react-sticky-mouse-tooltip';

class Home extends Component {

  constructor(props) {
    super(props);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.state = {
        hover: false
    };
  }

  mouseOver = () => {
    this.setState({hover: true});
  }

  mouseOut = () => {
    this.setState({hover: false});
  }

  render() {
    return(
      <div className="home">
        <Navigation />

        <div className="infos">
          <div id="myElement"></div>
          <div className="infos__description">
            <div>
              <p>
                I'm&ensp;
                <span className="infos__description__me" onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>
                  Tan-mba Takougnadi
                </span>
                {this.state.hover ? 
                  (
                    <MouseTooltip
                      visible={this.state.isMouseTooltipVisible}
                      offsetX={15}
                      offsetY={10}
                    >
                      <div className="infos__description__img"><img src={me} alt="" /></div>
                    </MouseTooltip>
                  ) : null
                } 
                , a front-end developer based in Paris.
                <br />
                I just graduated from <span><a href="https://www.digital-campus.fr/" target="__blank">Digital campus Paris</a></span> where I studied web development, UX/UI Design, 
                marketing and project management and <span>I'm currently looking for a job.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer">
          <ul className="footer__links">
            <li><a href="https://www.linkedin.com/in/tan-mbatakougnadi/" target="_blanck">Linkedin</a></li>
            <li><a href="https://www.facebook.com/people/Tan-Mba-Takougnadi/100001422870859" target="_blanck">Facebook</a></li>
            <li><a href={CV} target="_blanck">CV</a></li>
          </ul>
          <div className="footer__contact footer--home">
            <a href="mailto:tanmbatakougnadi@gmail.com" target="_blanck">
              <span role="img" aria-label="" aria-labelledby="">🌸</span>
              <img className="footer__contact__img" src={contact} alt="" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
