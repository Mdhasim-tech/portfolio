import React from "react";
import './page.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>
      <p>
        Thank you for visiting my portfolio. Whether you're an HR professional, recruiter,
        or someone interested in collaborating, I’d be happy to connect.
        Please feel free to reach out using the form below.
      </p>


      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:mdhasim1923070@gmail.com">mdhasim1923070@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+917982323227">+91 7982323227</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/md-hasim-81274b255" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/md-hasim-81274b255</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Mdhasim-tech" target="_blank" rel="noopener noreferrer">https://github.com/Mdhasim-tech</a></p>
      </div>
    </div>
  );
}
