import React from 'react';
import '../css/home.css';
import { FaUserAlt,FaCogs,FaGraduationCap,FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <div className="home-main-container">
            <div className="random-design"></div>
            <div className="random-design2"></div>
            <div className="random-design3"></div>
            <div className="random-design4"></div>
            <div className="glass">
                <div className="navbar-left">
                    <div className="identity">
                        <div className="image"></div>
                        <h1 className="name">Samir Mishra</h1>
                        <p className="position">MERN Stack Developer</p>
                    </div>
                    <div className="tabs">
                        <Link to="about" className="links"><FaUserAlt/>&nbsp;&nbsp;&nbsp; About</Link><br/>
                        <Link to="about" className="links"><FaCogs/>&nbsp;&nbsp;&nbsp; Skills</Link><br/>
                        <Link to="about" className="links"><FaGraduationCap/>&nbsp;&nbsp;&nbsp; Education</Link><br/>
                        <Link to="about" className="links"><FaEnvelope/>&nbsp;&nbsp;&nbsp; Contact</Link><br/>
                    </div>
                    <div className="social">
                        <h3 className="social-desc">Find me on social media</h3>
                        <a href="http://" target="_blank" className="social-icons" rel="noopener noreferrer"><FaFacebook/></a>
                        <a href="http://" target="_blank" className="social-icons" rel="noopener noreferrer"><FaGithub/></a>
                        <a href="http://" target="_blank" className="social-icons" rel="noopener noreferrer"><FaLinkedin/></a>
                    </div>
                </div>
                {/* <div className="navbar-right">
                    <div className="particles-container">
                       <div className="particles"></div>
                       <div className="particles"></div>
                       <div className="particles"></div>
                       <div className="particles"></div>
                       <div className="particles"></div>
                    </div>
                </div> */}
            </div>
            
        </div>
    );
}