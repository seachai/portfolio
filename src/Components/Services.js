import React from "react";

export default function Services() {
  return (
    <section id="services">
      <div className="title">
        <div className="circle">
          <h1>Services</h1>
        </div>
      </div>

      <div className="services-container">
        <div className="box box-1">
          <i className="fab fa-html5" />
          <h5>HTML</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vulputate, dui sit.
          </p>
        </div>
        <div className="box box-2">
          <i className="fab fa-css3-alt" />
          <h5>CSS</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vulputate, dui sit.
          </p>
        </div>
        <div className="box box-3">
          <i className="fab fa-js-square" />
          <h5>JavaScript</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vulputate, dui sit.
          </p>
        </div>
      </div>
    </section>
  );
}
