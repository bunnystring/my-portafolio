import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Desarrollador Web", "Diseñador web", "Desarrollador Backend"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const [activeLink, setActiveLink] = useState('home');
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible}) =>
              <div className={isVisible ? "animate__animated animate__backInDown" : ""}>
                <span className="tagline">Bienvenido a mi portafolio</span>
                <h1>{`Hola! Soy camilo`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Desarrollador Web", "Diseñador web", "Desarrollador Backend" ]'><span className="wrap">{text}</span></span></h1>
                <p>Soy desarollador web conocedor de varias tecnologias para el desarrollo de aplicaciones web, manejo de bases de datos relacionales, y tambien manejo la parte del backend con lenguajes como php el cual es mi fuerte, tambien me encuentro aprendiendo de frameworks como laravel, y para el front angular. soy apasionado y dispuesto a aprender nuevas tecnologias para el desarrollo. </p>
                <Nav.Link href="#contact" className="button" onClick={() => onUpdateActiveLink('contact')}>Contactate conmigo <ArrowRightCircle size={25} /></Nav.Link>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
