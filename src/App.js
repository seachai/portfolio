import React from "react";
import Header from "./Components/Header";
import TopSection from "./Components/TopSection";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import "./Sass/App.scss";

function App() {
  return (
      <div className="container">
        <Header />
        <TopSection />
        <Services />
        <Portfolio />
        {/* <Experience /> */}
        <Blog />
        <Footer />
      </div>
  );
}

export default App;
