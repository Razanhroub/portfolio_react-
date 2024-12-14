import React from 'react';
import me from './assets/me.jpg';

const Legend = () => (
  <div className="legend" id="aboutme">
    <div className="leftlegend">
      <img src={me} alt="Razan Alhroub" />
    </div>
    <div className="rightlegend">
      <h1>ABOUT ME</h1>
      <p style={{ maxWidth: '30rem' }}>
        I am a Front-End Developer passionate about creating user-friendly web applications. With a strong foundation in coding and design, I strive for quality and continuous improvement. I actively seek opportunities to enhance my skills and stay updated with industry trends.
      </p>
      <button className="resume"><a href="./Razan new cv fresh grad.pdf" style={{ textDecoration: 'none' }}>RESUME</a></button>
    </div>
  </div>
);

export default Legend;