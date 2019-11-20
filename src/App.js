import React from "react";
import TopSection from "./Components/TopSection";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import "./Sass/App.scss";

function App() {
  return (
    <div className="container">
      <TopSection />
      <Skills />
      <Portfolio />
      <Blog />
    </div>
  );
}

export default App;
