import React, { Component } from "react";

class PokeRestaurant extends Component {
  render() {
    return (
      <section className="pokerestaurant">
        <div className="container">
          <div className="project-image" />
          <h1>Poké Poké Restaurant</h1>
          <div className="info">
            <div className="buttons">
              <a
                href="https://compassionate-edison-12d6e5.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-desktop" /> View Project
              </a>
              <a
                href="https://github.com/seachai/restaurant/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-code" /> View Code
              </a>
            </div>
            <p>
              A restaurant landing page inspired by my love for seafood, Hawaii and Poke. <br />
              Created using HTML, CSS, Sass preprocessor, JavaScript and ReactJs. 
            </p>
            <div className="challenges">
              <h3>Challenges</h3>
              <ul>
                <li>Order online modal</li>
                <li>Review carousel</li>
              </ul>
            </div>
          </div>

          <div className="tech">
            <h3>Technologies</h3>
            <div className="icons">
              <i className="fab fa-html5" />
              <i className="fab fa-css3-alt" />
              <i className="fab fa-sass" />
              <i className="fab fa-js-square" />
              <i className="fab fa-react" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PokeRestaurant;
