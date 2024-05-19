import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import agroease from './Free_Sample_By_Wix.jpg';
import document from './document_verify.png'
const projects = [
  {
    image: agroease,
    name: 'AgroEase',
    description: 'AgroEase is a .Net Blazor application. It is Agricultural marketplace where any farmer can upload own agricultural items and sell out to customer with user friendly View',
    link:'https://github.com/toqeerabid10/.Net-AgroEase'
  },
  {
    image: document,
    name: 'Blockchain Document Verify',
    description: 'The application hashes documents using the SHA algorithm, stores them on Pinata IPFS and Ethereum blockchain via smart contracts, and includes essential functions like verify, store, add, delete, edit, sign in, and sign out in the main `app.js` file. The smart contract was developed using Remix IDE, with the deployed contracts address and ABI stored in the app for seamless transactions.',
    link: 'https://github.com/toqeerabid10/Documents_verification_Blockchain'
  },
  {
    image: agroease,
    name: 'AgroEase-Flutter App',
  description:'Aggroease is a Flutter application that i have created and designed. Firebase also added as a database',
    link: 'https://github.com/toqeerabid10/Aggroease_App'
  
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
