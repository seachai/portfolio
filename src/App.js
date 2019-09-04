import React from "react";
import TopSection from "./Components/TopSection";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import "./Sass/App.scss";

function App() {
  return (
    <div className="container">
      <TopSection />
      <Services />
      <Portfolio />
      <Blog />
    </div>
  );
}

export default App;