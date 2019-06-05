import React, { Component } from "react";

class PokeRestaurant extends Component {
  render() {
    return (
      <section class="pokerestaurant">
        <div className="container">
          <div className="project-image" />
          <h1>Poké Poké Restaurant</h1>
          <div className="info">
            <div className="buttons">
              <a
                href="https://compassionate-edison-12d6e5.netlify.com/"
                target="_blank"
              >
                <i className="fas fa-desktop" /> View Project
              </a>
              <a href="https://github.com/seachai/restaurant/" target="_blank">
                <i className="fas fa-code" /> View Code
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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
