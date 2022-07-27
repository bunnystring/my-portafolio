import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { HashLink } from 'react-router-hash-link';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <TrackVisibility>
      {({ isVisible }) =>
        <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                  <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
                </Nav>
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/arlez-camilo-ceron-herrera-ba2497235/" target="_blank"><img src={navIcon1} alt="" /></a>
                    <a href="https://www.facebook.com/arcamilo.ceronccherrera" target="_blank"><img src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/camilocc.h/" target="_blank"><img src={navIcon3} alt="" /></a>
                  </div>


                  <Nav.Link href="#contact" className="button" onClick={() => onUpdateActiveLink('contact')}>Contactame</Nav.Link>



                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>}
    </TrackVisibility>

  )
}