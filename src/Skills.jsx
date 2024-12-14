import React from 'react';
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import dbLogo from './assets/db.jpg';

const Skills = () => (
  <div className="skills" id="skills">
    <div className="skillsheader">
      <h1>SKILLS</h1>
    </div>
    <div className="skillslogo">
      <img src={htmlLogo} alt="HTML logo" />
      <img src={cssLogo} alt="CSS logo" />
      <img src={dbLogo} alt="Database logo" />
    </div>
  </div>
);

export default Skills;