import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Md Hasim. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="mailto:mdhasim1923070@gmail.com">Email</a>
          <a href="tel:+7982323227">Phone</a>
          <a
            href="https://www.linkedin.com/in/md-hasim-81274b255"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Mdhasim-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
