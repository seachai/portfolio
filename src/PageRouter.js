import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Sass/App.scss";

// Pages
import PokeRestaurant from "./Components/Pages/PokeRestaurant";
import RealEstate from "./Components/Pages/RealEstate";
import ProductLanding from "./Components/Pages/ProductLanding";
import BlogPage from "./Components/Pages/BlogPage";

// Utils
import ScrollToTop from "./Components/utils/ScrollToTop";

const PageRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="container">
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/poke-restaurant" component={PokeRestaurant} />
        <Route path="/real-estate" component={RealEstate} />
        <Route path="/product-landing" component={ProductLanding} />
        <Route path="/blog" component={BlogPage} />
        <Footer />
      </div>
    </Router>
  );
};

export default PageRouter;
