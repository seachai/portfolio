import React from "react";

function RealEstate() {
  return (
    <section className="realestate">
      <div className="container">
        <div className="project-image" />
        <h1>Real Estate</h1>
        <div className="info">
          <div className="buttons">
            <a
              href="https://clever-pare-319ba7.netlify.com/"
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
            A real estate single page application. <br />
            Built with love using HTML, CSS, Sass, JavaScript, ReactJs and
            React Router.
          </p>
          <div className="challenges">
            <h3>Challenges</h3>
            <div className="list-shift">
              <ul>
                <li>Filtering the data using state and components</li>
                <li>Setting up React Router to route the components</li>
              </ul>
            </div>
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

export default RealEstate;
