import React from 'react';
import './SubscribeBox.css'
import { faLinkedinIn, faGithub, faTelegram, faDiscord} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SubscribeBox = () => {
    return (
        <section id="subscribe">

            <div className="container">
                <div className="sub-box row subscribe-container"  data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500">

                    <div className="sub-box-single col-md-4 pb-4">
                        <h2 className="service-font1">SUBSCRIBE NOW</h2>
                        <div className="sub-input-box">
                            <input type="text" placeholder="Enter Your E-mail" />
                            <input id="sub-submit" type="submit" value="Submit" />
                        </div>
                    </div>

                    <div className="sub-box-single col-md-4 pb-4">

                        <h2 className="service-font1">CONTACTS NOW</h2>
                        <p>Call Me : +380 44 175 0960</p>
                        <p>Email Me : darknight.dev0918918@gmail.com</p>

                    </div>

                    <div className="sub-box-single col-md-4 pb-4">
                        <h2 className="service-font1">FOLLOW ME</h2>
                        <div className="sub-fllow-icon">
                            <a href="https://github.com/DarkNight918"><FontAwesomeIcon icon={faGithub}/></a>
                            <a href="https://t.me/DarkNight918"><FontAwesomeIcon icon={faTelegram}/></a>
                            <a href="https://discordapp.com/users/1015255707421003776"><FontAwesomeIcon icon={faDiscord}/></a>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default SubscribeBox;