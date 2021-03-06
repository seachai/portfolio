import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <div className="title">
        <div className="circle" />
        <h1>Technical Skills</h1>
      </div>

      <div className="skills-container">
        <div className="box box-1">
          <i className="fab fa-html5" />
          <h5>HTML</h5>
          <p>Semantic HTML5</p>
        </div>
        <div className="box box-2">
          <div className="languages">
            <i className="fab fa-css3-alt" />
            <h5>+</h5>
            <i className="fab fa-sass" />
          </div>
          <h5>CSS</h5>
          <p>CSS and Sass preprocessor</p>
        </div>
        <div className="box box-3">
          <div className="languages">
            <i className="fab fa-js-square" />
            <h5>+</h5>
            <i className="fab fa-react" />
          </div>
          <h5>JavaScript</h5>
          <p>ES6+ and ReactJs</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
