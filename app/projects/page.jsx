import React from "react";
import Head from "next/head";
import './page.css'

const projects = [
  {
    title: "Customer Segmentation",
    videoUrl: "/Customer Segmentation.mp4",
    github: "https://github.com/Mdhasim-tech/Smart-Customer-Dashboard",
    description: "ML model for segmenting customers using clustering | K-means clustering |unsupervised ML model"
  },
  {
    title: "Disease Predictor & Prescription",
    videoUrl: "Disease Predictor.mp4",
    github: "https://github.com/Mdhasim-tech/Disease-Prediction-and-recommendation",
    description: "Predicts diseases and suggests prescriptions | MultinomialNB | ML model"
  },
  {
    title: "Emotion Detector",
    videoUrl: "emotion-detector.mp4",
    github: "https://github.com/Mdhasim-tech/emotion-detector",
    description: "Detects emotions from your messages | GRU | DL model"
  },
  {
    title: "Salary Predictor",
    videoUrl: "Salary Predictor.mp4",
    github: "https://github.com/Mdhasim-tech/Salary-prediction-app",
    description: "Predicts your salary based on relevant informations | XGBoost Regressor | ML model"
  },
  {
    title: "Dog Vs Cat classifier",
    videoUrl: "DogVsCat.mp4",
    github: "https://github.com/Mdhasim-tech/Dog-Vs-Cat-classifier",
    description: "Classifies Dog vs cat images | CNN model | Data augmentation"
  },
  // ... Add all your other projects here
  {
    title: "Students Marks Predictor",
    videoUrl: "Students marks predictor.mp4",
    github: "https://github.com/Mdhasim-tech/Students-Percentage-Predictor",
    description: "Predicts the marks percentage of a student | KNN model"
  },
  {
    title: "Bank Churn Predictor",
    videoUrl: "Bank Churn Predictor.mp4",
    github: "https://github.com/Mdhasim-tech/Churn-Prediction",
    description: "The app predicts whether a bank customer is likely to churn based on input data — helping businesses take action early | ANN model "
  },
  {
    title: "Heart Disease Predictor",
    videoUrl: "Heart Disease Predictor.mp4",
    github: "https://github.com/Mdhasim-tech/Heart-Disease-Predictor",
    description: "The app predicts wheather a person can have heart disease or not | Adaboost classifier | ML model "
  },
  {
    title: "Energy Efficient Buiding Predictor",
    videoUrl: "Energy Efficient Building.mp4",
    github: "https://github.com/Mdhasim-tech/Energy-Efficient-Building-Predictor",
    description: "Predicting is a building Energy Efficient or not | Random Forest Regressor | ML model "
  },
  {
    title: "Personalized Chatbot at Hasimtech",
    videoUrl: "nova ai.mp4",
    github: "https://github.com/Mdhasim-tech/Nova-AI",
    description: "A personalized chatbot | RAG | Google Gemini | Langchain"
  },
  {
    title: "A Watsonx assistant",
    videoUrl: "Food Restaurant.mp4",
    github: "https://github.com/Mdhasim-tech/Restuarant-watsonx-assistant",
    description: "A Restaurant watsonx assistant | IBM Internship"
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>
      <div className="projects-page">
        <h1>All Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="video-container">
                <iframe
                  src={project.videoUrl}
                  title={project.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
