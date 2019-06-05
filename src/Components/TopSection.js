import React from "react";

export default function TopSection() {
  return (
    <section id="top">
      <div className="info">
        <div className="square" />
        <h1>Chai Lee</h1>
        <p>Front End Developer</p>
        <a href="mailto:imchai@gmail.com" className="hire">
          Available for Hire
        </a>
      </div>
      <div className="about">
        <span className="title">About Me</span>
        <p>
          Hello my name is Chai. When I first wrote the lines hello world, I was
          awestruck. I'm a passionate, ambitious and adventurous developer. I
          spend my time sweating at the gym, gaining weight at restaurants and
          getting lost in code.
        </p>
      </div>
    </section>
  );
}
