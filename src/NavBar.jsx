import React from 'react';
import logo from './assets/logo.jpg';
import './style.css';


const NavBar = () => (
    <>
        <div className="nav">
            <div className="left">
                <ul>
                    <li style={{ textDecoration: 'none' }}>
                        <a href="#"><img src={logo} alt="Razan Alhroub logo" style={{ height: '10vh', width: '10vh', borderRadius: '50%' }} /></a>
                    </li>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li><a href="#aboutme"><p>ABOUT ME</p></a></li>
                    <li><a href="#services"><p>SERVICES</p></a></li>
                    <li><a href="#skills"><p>SKILLS</p></a></li>
                    <li><a href="#projects"><p>PROJECTS</p></a></li>
                    <li><a href="#testimonial"><p>TESTIMONIAL</p></a></li>
                    <li><a href="#foot"><p>CONTACT</p></a></li>
                </ul>
            </div>
        </div>
    </>
);

export default NavBar;