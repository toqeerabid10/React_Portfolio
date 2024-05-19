import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import aero from './aero.png';
import LOGO from './LOGO2.PNG'
const projects = [
  {
    image: aero,
    name: 'Airline Reservation System',
    description: 'Airline Reservation System is a React application.It basically handels out all of the reswervations of the clients regarding airlines and their travell ',
    link:'https://github.com'
  },
  {
    image: LOGO,
    name: 'ExamTech',
    description: 'ExamTEch as an AI based auto grading system which marks students paers without any manual teachers interference.',
    link: 'https://github.com'
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">View Project</Button>
              </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Projects;
