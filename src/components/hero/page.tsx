import React from 'react';
import '../hero.css';
import '../button.css';
import Button from '../button/page';

const Hero = () => {
  return (
    <>
      <section>
        <div className="grid-layout">
          <div className="flex-layout">
            <div className="hero-content">
              <h3>
                <span>Hello I&apos;m </span> Sumair Khan
              </h3>
              <p>
                I am a dedicated Full-Stack Web Developer specializing in HTML5, CSS3, TypeScript, JavaScript, Tailwind CSS, React.js, and Next.js. My focus is on building dynamic and user-centric web applications. I am passionate about integrating the latest technologies, including Cloud Computing and Generative AI, to create scalable and efficient solutions that meet business needs. Lifelong learning and innovation are at the core of my work, and I am eager to further explore Cloud Computing and Generative AI in the future.
              </p>
              <Button />
            </div>
            <div className="hero-img">
              <img className="" src="hero-pics.jpeg" alt="Hero" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
