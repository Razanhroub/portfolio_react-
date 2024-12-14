import React from 'react';
import logo from './assets/logo.jpg';

const Footer = () => (
  <div className="footer" id="foot">
    <div className="footer-top">
      <p><a href="#foot" style={{ textDecoration: 'none' }}><span>CONTACT</span></a></p>
    </div>
    <div className="footer-middle">
      <div className="leftfoot">
        <p>Drop Me a Message</p>
        <p style={{ fontSize: '1rem' }}>I’m open to inquiries and collaborations. Feel free to reach out!</p>
        <ul>
          <li><span className="icon-box"><box-icon name='phone' color="rgb(19, 19, 47)"></box-icon></span> +962785588120</li>
          <li><span className="icon-box"><box-icon name='envelope' color="rgb(19, 19, 47)"></box-icon></span> razan.b.alhroub@gmail.com</li>
          <li><span className="icon-box"><box-icon name='current-location' color="rgb(19, 19, 47)"></box-icon></span> Amman, Jordan</li>
        </ul>
      </div>
      <div className="rightfoot">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <a href="#"><img src={logo} alt="Razan Alhroub logo" style={{ borderRadius: '50%' }} /></a>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/razan-alhroub-67857a2a7/" style={{ textDecoration: 'none' }}>
            <span className="icon-box"><box-icon name='linkedin' type='logo' color="rgb(19, 19, 47)"></box-icon></span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Razanhroub" style={{ textDecoration: 'none' }}>
            <span className="icon-box"><box-icon name='github' type='logo' color="rgb(19, 19, 47)"></box-icon></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;