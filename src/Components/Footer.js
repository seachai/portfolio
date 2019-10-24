import React from "react";

const Footer = () => {
  const whatYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }

  return (
    <footer id="footer">
      <div className="bg">
        <div className="info">
          <h4>Contact</h4>
          <p>
            I'm always interested in working on new projects that challenges me.
            <a href="mailto:imchai@gmail.com"> Hire me</a> if you would like to work together.
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
          <div className="copyright">&copy; {whatYear()} Chai Lee. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;