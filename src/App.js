import React from 'react';
import TopSection from './Components/TopSection'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import './Sass/App.scss';

function App() {
  return (
    <div className="container">
      <TopSection />
      <Services />
      <Portfolio />
      <Experience />
    </div>
  );
}

export default App;
