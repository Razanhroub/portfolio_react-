import React from 'react';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Legend from './Legend';
import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';
import Testimonial from './Testimonial';
import Footer from './Footer';
import './style.css'; // Import your CSS file here

const App = () => (
  <div>
    <NavBar />
    <main className="main">
      <AboutMe />
      <Legend />
      <Services />
      <Skills />
      <Projects />
      <Testimonial />
    </main>
    <Footer />
  </div>
);

export default App;