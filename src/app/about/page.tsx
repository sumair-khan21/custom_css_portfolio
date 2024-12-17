import React from 'react';
import './about.css';

const About = () => {
  return (
    <>
      <section>
        <div className="flexAbout">
          <div className="about-img">
            <img className="" src="about-img.jpeg" alt="About Me" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I am Sumair Khan, a passionate Full-Stack Web Developer with a solid background in both frontend and backend technologies. My journey in web development has equipped me with skills in HTML5, CSS3, TypeScript, Tailwind CSS, React.js, and Next.js.
            </p>
            <h3>Skills</h3>
            <div className="space-y-4">
              <div className="flex-container">
                <label htmlFor="htmlandcss" className="label">
                  HTML &amp; CSS
                </label>
                <div className="progress-bar">
                  <div className="progress-fill w-10-12"></div>
                </div>
              </div>

              <div className="flex-container">
                <label htmlFor="typescript" className="label">
                  TypeScript
                </label>
                <div className="progress-bar">
                  <div className="progress-fill w-11-12"></div>
                </div>
              </div>

              <div className="flex-container">
                <label htmlFor="javascript" className="label">
                  JavaScript
                </label>
                <div className="progress-bar">
                  <div className="progress-fill w-9-12"></div>
                </div>
              </div>
              <div className="flex-container">
                <label htmlFor="nextjs" className="label">
                  Next.js
                </label>
                <div className="progress-bar">
                  <div className="progress-fill w-10-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
