"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><a href="/">ML Engineer</a></div>

      {/* Hamburger icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu Links */}
      <ul className={`navLinks ${menuOpen ? "open" : ""}`}>
        <li>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
