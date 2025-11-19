import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((bar, index) => {
      gsap.fromTo(bar, { width: '0%' }, {
        width: `${[80, 90, 70, 85][index]}%`,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: bar, start: 'top 80%' }
      });
    });
  }, []);

  const skills = [
    { name: 'React', level: 80 },
    { name: 'GSAP', level: 90 },
    { name: 'JavaScript', level: 70 },
    { name: 'CSS', level: 85 }
  ];

  return (
    <section id="skills" className="section skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill">
            <span>{skill.name}</span>
            <div className="skill-bar">
              <div
                ref={el => skillRefs.current[index] = el}
                className="skill-fill"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;