import React from 'react';
import './Introduction.css'; // Custom CSS for styling
import profilePic from './Aziz.jpg';

const Introduction = () => {
  return (
    <section id="home" className="introduction text-center">
      
      <h1>Hi, I'm Abdul Aziz Khan, A Full Stack Web Developer and Artificial Intelligence enthusiast</h1>
      <p className='intro'> I am currently pursuing a BS in Computer Science
       at Air University. As a full stack developer, I have a strong foundation in the MERN stack, 
       having built numerous web applications. I am passionate about Artificial Intelligrnce and am actively learning 
       new skills in this field.</p>
       <img src={profilePic} alt="Profile" className="profile-pic" />
    </section>

  );
};

export default Introduction;
