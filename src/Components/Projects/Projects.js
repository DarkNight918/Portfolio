import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { Button, Card, Col } from 'react-bootstrap';
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import nftMarket from '../img/NFT-marketplace.PNG';
import kontainer from '../img/Kontainer.PNG';
import invest from '../img/invest.PNG';
import solsapp from '../img/Solsapp.PNG';
import treasury from '../img/Treasury.PNG';
import space from '../img/Space.PNG';
import './Projects.css';
import '../Services/bootstrap/css/bootstrap.min.css'
import  Fade  from 'react-reveal/Fade';

const Projects = () => {
  const project = [
    {
        title: 'NFT marketplace',
        using: 'Rust, React',
        description: ' NFT marketplace on Solana netowrk.',
        imageUrl: nftMarket,
        visit: 'https://kanon.exchange',
    },
    {
        title: 'Kontainer',
        using: 'Laravel + Vue.js',
        description: ' Share images, files and product data via integrations.',
        imageUrl: kontainer,
        visit: 'https://kontainer.com/',
        
    },
    {
        title: 'Spring Invest',
        using: 'Next.js, MongoDB',
        description: ' Investing Site',
        imageUrl: invest,
        visit: 'https://spring-invest.com/',
    },
    {
      title: 'Solsapp',
      using: 'MERN stack Tech',
      description: ' Payment Infrastructure for Online Community Managers.',
      imageUrl: solsapp,
      visit: 'https://solsapp.com/',
    },
    {
      title: 'Treasury',
      using: 'Angular, MongoDB',
      description: ' Virtual Record Treasury of Ireland — an all-island and international legacy for the Decade of Centenaries.',
      imageUrl: treasury,
      visit: 'https://virtualtreasury.ie',
    },
    {
      title: 'Space',
      using: 'Three.js',
      description: ' Develop space with Three.js technology.',
      imageUrl: space,
      visit: 'https://github.com/DarkNight918/threejs-space',
    }
  ]

  return (
    <section id="projects" className="container mt-5">
      <h1 className="service-font1 text-center">Projects</h1>
    
      <div className="row">
        {
          project.map((proj, index) => 
            <Col lg={4} md={6} className="mt-5" key={index}>
              <motion.div  drag dragConstraints={{left:0, top:0, right:0, bottom:0}} dragElastic={0.5}>
                  <Card className="cardAlign border-0 p-3 container card-container ">
                      <Fade left>
                          <img className='img-fluid' src={proj.imageUrl}  alt={proj.title} />
                              <Card.Body>
                                  <Card.Title as="h4" className="title-align">{proj.title}</Card.Title>
                                  <h6 className="using-align">{proj.using}</h6>
                              </Card.Body>  
                              
                              <Card.Footer className='d-flex justify-content-between align-items-center border-0'>
                                  <a href={proj.imageUrl}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Full Screen</a>
                                  <Button href={proj.visit}  variant='info' className="main-button"><FontAwesomeIcon icon={faEye}  />  Visit</Button>            
                              </Card.Footer>
                          </Fade>
                      </Card>
              </motion.div>
            </Col>
            )
        }
      </div>

    </section>
  );
};

export default Projects;