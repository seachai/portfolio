import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import TopSection from "./Components/TopSection";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import "./Sass/App.scss";

// Pages
import ProjectInfo from './Components/Pages/ProjectInfo'

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <TopSection />
        <Services />
        <Portfolio />
        <Blog />
        <Footer />
      </div>
      <Route path="/project-info" component={ProjectInfo} />
    </Router>
  );
}

export default App;
