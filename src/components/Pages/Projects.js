import React from 'react';
import "./project.css";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import portfolio from '../../assets/portfolio.png'; 
import efficencia from '../../assets/efficencia.png';
import passwordGen from '../../assets/passwordGen.png';

const items = [
  {
    id: 1,
    title: "Efficencia",
    img: efficencia, // Use imported image here
    description: "A Student portal with an interactive dashboard that allows users to track their performance daily. It helps students monitor progress by solving questions and completing daily goals, fostering continuous growth.",
    demo: "https://github.com/raj-Anand06/Efficencia",
  },
  {
    id: 2,
    title: "Password Generator",
    img: passwordGen, // Use imported image here
    description: "It is a password generator that automatically creates passwords based on your preferences, including character types and password styles, ensuring secure and customized password generation.",
    demo: "https://raj-anand06.github.io/PasswordGenrator/",
  },
  {
    id: 3,
    title: "Other",
    img: portfolio, // Use imported image here
    description: "You can find other projects on my GitHub.",
    demo: "https://github.com/raj-Anand06",
  },
];

function Projects() {
  const { scrollYProgress } = useViewportScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]); // Adjust range as needed

  const handleTitleClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  return (
    <div className="projects">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          className="progressBar"
          style={{
            scaleX: scaleX,
            transformOrigin: "left center"
          }}
        />
      </div>
      {items.map(item => (
        <motion.div
          className="container"
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="wrapper">
            <div className="imgContainer">
              <img src={item.img} alt={item.title} />
            </div>
            <motion.div className="textContainer">
              <h2
                style={{ cursor: "pointer" }}
                onClick={() => handleTitleClick(item.demo)}
              >
                {item.title}
              </h2>
              <p>{item.description}</p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
