import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer id="footer">

            <div className="container"  data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">

                <div className="row">

                    <div className="footer-box col-md-4 col-sm-6">

                        <h3 className="service-font1">ABOUT ME</h3>
                        <p>I'm a full-stack engineer with 7 years specializing in web and mobile development, learning all aspects of the language from prototype inheritance, closure, modern & classic architecture design patterns, and performance improvements.</p>

                        <div className="ficons">
                            <a href="https://github.com/DarkNight918"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href="https://t.me/DarkNight918"><FontAwesomeIcon icon={faTelegram}/></a>
                            <a href="https://discordapp.com/users/1015255707421003776"><FontAwesomeIcon icon={faDiscord}/></a>
                        </div>

                    </div>

                    <div className="footer-box col-md-4 col-sm-6">

                        <h3 className="service-font1">CONTACT ME</h3>

                        <div className="contact-icon d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faHome} />
                            <span> Zaprudne, 21, Autonomous Republic of Crimea, Ukraine</span>
                        </div>

                        <div className="contact-icon d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faPhone} />
                            <span> +380 44 175 0960 </span>
                        </div>

                        <div className="contact-icon d-flex align-items-center mb-4">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span> darknight.dev0918@gmail.com</span>
                        </div>

                    </div>

                    <div className="footer-box col-md-4 col-sm-6">

                        <h3 className="service-font1">USEFUL LINKS</h3>

                        <ul> 
                            <li><Link to="/" ><FontAwesomeIcon icon={faChevronRight} />Home</Link></li>
                            <li><Link to="/#services" ><FontAwesomeIcon icon={faChevronRight} />Services</Link></li>
                            <li><Link to="/#skills" ><FontAwesomeIcon icon={faChevronRight} />Skills</Link></li>
                            <li><Link to="/#projects" ><FontAwesomeIcon icon={faChevronRight} />Projects</Link></li>
                            <li><Link to="/#blogs" ><FontAwesomeIcon icon={faChevronRight} />Blogs</Link></li>
                        </ul>

                    </div>

                </div>

                <div className="copy-right-container">
                    <p>Copyright &copy; {new Date().getFullYear()}, All rights reserved</p>
                </div>

            </div>
        </footer>

    );
};

export default Footer;