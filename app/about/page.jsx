import React from "react";
import "./page.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hi, I'm <span className="highlight">Md Hasim</span>, a passionate
          Machine Learning Engineer with a strong foundation in building smart AI systems
          using machine learning and deep learning. Beyond model development, I create
          <span className="highlight"> end-to-end AI solutions</span> — from designing intuitive
          frontends to developing robust backends — turning ideas into fully functional,
          intelligent applications.
        </p>
        <p>
          I have worked on projects like Customer Segmentation, Disease
          Prediction, Loan Approval, and many others — applying both traditional
          ML and modern deep learning techniques. My work focuses on delivering
          accurate, efficient, and production-ready AI solutions.
        </p>
        <p>
          Apart from coding, I share my knowledge through my{" "}
          <a
            href="https://www.youtube.com/@Decodewithhasim"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube channel
          </a>
          , where I make tutorials and showcase my projects.
        </p>

        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Machine Learning</li>
          <li>Python, JavaScript, C, C++, Java</li>
          <li>Langchain</li>
          <li>Next.js, Flask</li>
          <li>Data Preprocessing</li>
          <li>Model Deployment (Flask, Next.js)</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Deep Learning</li>
        </ul>
      </div>
    </div>
  );
}
