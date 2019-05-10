import React from 'react';
import TopSection from './Components/TopSection'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Blog from './Components/Blog'
import './Sass/App.scss';

function App() {
  return (
    <div className="container">
      <TopSection />
      <Services />
      <Portfolio />
      {/* <Experience /> */}
      <Blog />
    </div>
  );
}

export default App;
