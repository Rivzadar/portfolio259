import React from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>Rivza Dar</h1>
        <p>React Developer | Student</p>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate React developer and computer science student.
          I love building web applications and learning new technologies.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React.js</li>
          <li>Git & GitHub</li>
          <li>Basic Python & Java</li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <ul>
          <li>Scientific Calculator (React)</li>
          <li>Employee Management System</li>
          <li>CSV Data Visualization Tool</li>
        </ul>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
        <p>GitHub: github.com/yourusername</p>
      </section>

      <footer className="footer">
        <p>© 2026 Rivza Dar</p>
      </footer>
    </div>
  );
}