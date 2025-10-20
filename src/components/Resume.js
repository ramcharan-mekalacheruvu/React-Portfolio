import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="section resume-section">
      <h2>Resume</h2>
      <div className="resume-container">
        {/* Education */}
        <div className="resume-box">
          <h3>Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <h4>B.Tech in Computer Science</h4>
              <p className="institute">Annamacharya Institute of Technology & Sciences, Rajampet</p>
              <p className="year">2023 – 2027</p>
              <p>Focused on software development, web technologies, and data structures.</p>
            </div>
            <div className="timeline-item">
              <h4>Intermediate (MPC)</h4>
              <p className="institute">Sri Chaitanya Jr. College</p>
              <p className="year">2021 – 2023</p>
              <p>Completed core subjects in Mathematics, Physics, and Chemistry with distinction.</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="resume-box">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div className="skill">React.js</div>
            <div className="skill">JavaScript (ES6+)</div>
            <div className="skill">HTML5 / CSS3</div>
            <div className="skill">Python</div>
            <div className="skill">C / C++</div>
            <div className="skill">Git & GitHub</div>
            <div className="skill">Data Structures</div>
            <div className="skill">Problem Solving</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
