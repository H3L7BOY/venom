import React, { useState, useEffect } from 'react';
import { AnimatedCard, Spinner } from 'react-bits';

function Projects() {
  const [loading, setLoading] = useState(true);
  const projects = [
    { title: 'Project 1', desc: 'A cool app built with React.' },
    { title: 'Project 2', desc: 'An animated site using GSAP.' },
    { title: 'Project 3', desc: 'A portfolio like this one.' }
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <section id="projects" className="section projects">
      <h2>Projects</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className="project-grid">
          {projects.map((proj, index) => (
            <AnimatedCard key={index} title={proj.title} description={proj.desc} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;