import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Bid Americas",
      description: "Diseño y Desarrollo",
      imgUrl: projImg1,
    },
    {
      title: "Sistema Formulario AuPair",
      description: "Diseño y Desarrolllo",
      imgUrl: projImg2,
    },
    {
      title: "Formulario Asistencia",
      description: "Diseño & Desarrollo",
      imgUrl: projImg3,
    },
    {
      title: "Sistema Pagos Paypal",
      description: "Diseño & Desarrollo",
      imgUrl: projImg4,
    },
    {
      title: "Yakkar Eventos",
      description: "Etapa Diseño & Desarrollo",
      imgUrl: projImg5,
    },
    {
      title: "GEIM",
      description: "Diseño & Desarrollo",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
            {({ isVisible}) =>
              <div className={isVisible ? "animate__animated animate__zoomInDown" : ""}>
                <h2>Proyectos</h2>
                <p>Estos son los proyectos que he venido creando para que puedas echar un vistazo</p>
              </div>} 
          </TrackVisibility>    
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Primera</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Segunda</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tercera</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Muy pronto se agregarán nuevos Proyectos.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Muy pronto se agregarán nuevos Proyectos.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
