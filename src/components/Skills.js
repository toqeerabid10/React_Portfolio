import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Skills.css'; // Custom CSS for styling

const skills = [
  { name: 'ASP.Net', proficiency: 70 },
  { name: 'React.js', proficiency: 75 },
  { name: 'CSS', proficiency: 90 },
  { name: 'C++', proficiency: 90 },
  { name: 'python', proficiency: 60 },
  { name: 'SQL', proficiency: 80 },

];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-item">
            <h5>{skill.name}</h5>
            <ProgressBar now={skill.proficiency} label={`${skill.proficiency}%`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
