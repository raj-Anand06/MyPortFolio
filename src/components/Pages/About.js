import React, { useState } from 'react';
import './About.css';

function About() {
  const [codeforcesRating, setCodeforcesRating] = useState(null);
  const [showCodeforcesRating, setShowCodeforcesRating] = useState(false);
  const [leetcodeRating, setLeetcodeRating] = useState(null);
  const [showLeetcodeRating, setShowLeetcodeRating] = useState(false);
  const [codechefRating, setCodechefRating] = useState(null);
  const [showCodechefRating, setShowCodechefRating] = useState(false);

  const handleCodeforcesClick = async () => {
    try {
      const response = await fetch("https://codeforces.com/api/user.info?handles=bot_AR");
      const data = await response.json();
      setCodeforcesRating(data.result[0].rating);
      setShowCodeforcesRating(true);
    } catch (error) {
      console.error('Error fetching Codeforces rating:', error);
    }
  };

  const handleLeetcodeClick = () => {
    setLeetcodeRating('1790');
    setShowLeetcodeRating(true);
  };

  const handleCodechefClick = () => {
    setCodechefRating('3*');
    setShowCodechefRating(true);
  };

  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-header">
          <p className="about-title">About</p>
        </div>
        <div className="about-content">
          <p className="about-text">
            This is Anand Raj, currently pursuing Btech in Computer Science and Engineering from BIT Mesra, Ranchi, Jharkhand.
          </p>
          <p className="about-text">
            As a dedicated student specializing in Computer Science and Engineering, I possess a strong foundation in computer fundamentals, web development, and problem-solving with a focus on data structures and algorithms (DSA). I have gained proficiency in key programming languages such as Java, C, and C++, allowing me to efficiently implement solutions to complex problems. Through hands-on experience in web development, I have mastered JavaScript, MongoDB, ExpressJS, NodeJS, etc., enabling me to create dynamic and responsive websites. Additionally, I have sharpened my problem-solving skills through coursework and personal projects, utilizing DSA concepts to optimize code performance. With this diverse skill set, I am equipped to tackle challenges in the realm of technology and contribute to innovative solutions.
          </p>
        </div>
        <div className="coding-profile">
          <p className="coding-profile-title">Coding Profile</p>
          <div className="coding-profile-buttons">
            <button className="coding-profile-button" onClick={handleCodeforcesClick}>
              Codeforces {showCodeforcesRating && `Rating: ${codeforcesRating}`}
            </button>
            <button className="coding-profile-button" onClick={handleLeetcodeClick}>
              LeetCode {showLeetcodeRating && `Rating: ${leetcodeRating}`}
            </button>
            <button className="coding-profile-button" onClick={handleCodechefClick}>
              CodeChef {showCodechefRating && `Rating: ${codechefRating}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
