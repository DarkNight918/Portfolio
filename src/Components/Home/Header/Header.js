import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import Resume from "../../../Resume.pdf";

const Header = () => {

  return (
    <div className="container">
      <div className="particl">
      </div>
     
      <div className="headerfit">
     
        <section className="about-sec mt-180 mt-sm-120  mb-30"  data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">
        
          <div className="row">
            <div className="col-lg-12">
              <div className="mdl-card mdl-shadow--2dp">
                <div className="row">
                  
                  <div className="col-md-7 col-xs-12">
                    <div className="info-wrap">
                      <h1 className="header-font">Mykola Sydorenko</h1>
                      <div className="header-font2 mt-20">
                        <Typewriter
                          options={{
                            strings: ["Full Stack & Blockchain Developer"],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </div>
                      <br/>

                      <div className="buttons">
                        <a href={Resume} download="Mykola_Resume">
                          <Button className="btn-hover color-2"><FontAwesomeIcon icon={faEye}  />  Download CV</Button>
                        </a>
                      </div>
                      
                    </div>
                    <ul className="head-font3 profile-wrap mt-3">
                    <div className="row">
                      <div className="col-lg-4">
                        <h5>Address</h5>
                        <br/>
                        <h5>E-mail</h5>
                        <h5>Phone</h5>
                        <h5>Freelance</h5>
                      </div>
                      <div className="col-lg-8">

                        <h5>Zaprudne, 21, Autonomous Republic of Crimea, Ukraine</h5>
                        <h5>darknight.dev0918@gmail.com</h5>
                        <h5>+380 44 175 0960</h5>
                        <h5>Available</h5>
                      </div>
                      </div>
                    </ul>
                    
                  </div>
                  <div className="col-md-5 col-xs-12 mb-30">
                    <div className="candidate-img mb-35"></div>    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        
      </div>
     
    </div>
  );
};

export default Header;
