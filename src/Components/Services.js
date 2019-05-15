import React from "react";

export default function Services() {
  return (
    <section id="services">
      <div className="title">
        <div className="circle">
        </div>
        <h1>Technical Skills</h1>
      </div>

      <div className="services-container">
        <div className="box box-1">
          <i className="fab fa-html5" />
          <h5>HTML</h5>
          <p>
            Semantic HTML5 and below
          </p>
        </div>
        <div className="box box-2">
          <div className="languages">
            <i className="fab fa-css3-alt" />
            <h5>+</h5>
            <i className="fab fa-sass" />
          </div>
          <h5>CSS</h5>
          <p>
            CSS3 and Sass preprocessor
          </p>
        </div>
        <div className="box box-3">
          <div className="languages">
            <i className="fab fa-js-square" />
            <h5>+</h5>
            <i className="fab fa-react" />
          </div>
          <h5>JavaScript</h5>
          <p>
            ES6+ and ReactJs
          </p>
        </div>
      </div>
    </section>
  );
}
