import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Sass/App.scss";

// Pages
import ProjectInfo from "./Components/Pages/ProjectInfo";

function PageRouter() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/project-info" component={ProjectInfo} />
        <Footer />
      </div>
    </Router>
  );
}

export default PageRouter;