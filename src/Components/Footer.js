import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="bg">
        <div className="info">
          <h4>Contact</h4>
          <p>
            I'm always interested in working on new projects.
            <a href="#hire"> Hire me</a> if you would like to work together.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/chai-lee-5a064649/">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://github.com/seachai">
              <i className="fab fa-github-alt" />
            </a>
            <a href="mailto:imchai@gmail.com">
              <i className="far fa-envelope" />
            </a>
          </div>
          <div className="copyright">&copy; 2019 Chai Lee. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
