import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <section id="home" className="section home-section">
      <div className="home-content">
        <div className="home-left">
          <h2 className="welcome-text">Hello, I’m</h2>
          <h1 className="main-name">Ram Charan M</h1>
          <h3 className="tagline">Full-Stack Developer</h3>

          <p className="intro-text">
            Hello! I'm M. Ram Charan, currently a third-year B.Tech student at Annamacharya
             Institute of Technology and Sciences. I am pursuing 
            my degree in Computer Science and Engineering (AI).
          </p>

          <div className="home-buttons">
            <a href="#contact" className="btn hire-btn">Hire Me</a>
            <a href="/resume.pdf" download className="btn resume-btn">Download Resume</a>
          </div>
        </div>

        <div className="home-right">
          <img
            src="/profile2.jpeg"
            alt="Profile"
            className="profile-photo large"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
