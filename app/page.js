import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Md Hasim!</span></h1>
          <p>
            Machine Learning Engineer | Deep Learning | Python | Next.js | Flask |
            AI Enthusiast | DSA | Problem Solver
          </p>
        </div>
        <div className="hero-image">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={250}
            height={250}
            className="profile-pic"
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>My Top Projects</h2>
        <div className="project-grid">

          {/* Project 1 */}
          <div className="project-card">
            <video
              controls
              preload="metadata"
              poster="/emotion.PNG"
            >
              <source src="/emotion-detector.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>Emotion Detector</h3>
            <p>GRU model which predicts the emotions in a message</p>
            <div className="links">
              <a href="https://github.com/Mdhasim-tech/emotion-detector" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://youtu.be/your-video" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <video
              controls
              preload="metadata"
              poster="/customer.PNG"
            >
              <source src="/Customer Segmentation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>Customer Segmentation</h3>
            <p>Unsupervised learning project for targeted marketing.</p>
            <div className="links">
              <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://youtu.be/your-video" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* See All Projects Button */}
        <div className="see-all-btn">
          <Link href="/projects">
            <button>See All Projects</button>
          </Link>
        </div>
      </section>

    </div>
  );
}
