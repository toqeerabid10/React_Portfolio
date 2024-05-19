import React from 'react';
import './Introduction.css'; // Custom CSS for styling
import profilePic from './user-removebg-preview.png';

const Introduction = () => {
  return (
    <section id="home" className="introduction text-center">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1>Hi, I'm [Toqeer Ahmad ], A Web Developer and Data Science enthusiast</h1>
      <p className='intro'> My name is Toqeer, and I am from Rawalpindi. I am currently pursuing a BS in Computer Science
       at Air University Islamabad. As a full stack developer, I have a strong foundation in the MERN stack, 
       having built numerous web applications. I am passionate about data science and am actively learning 
       new skills in this field. My goal is to merge my web development expertise with data science to create
        innovative and impactful solutions.</p>
    </section>

  );
};

export default Introduction;
