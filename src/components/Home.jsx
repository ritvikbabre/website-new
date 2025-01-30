import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <section className="home">
            <h1>Welcome to My Portfolio</h1>
            <h3>The Website building is still under progress incase you find bugs</h3>
            <p>Discover my work, skills, and certifications.</p>
            <div className="navigation-buttons">
                <Link to="/portfolio" className="nav-button">
                    <h3>Resume</h3>
                    <p>View my experience and skills</p>
                </Link>
                <Link to="/certifications" className="nav-button">
                    <h3>Certifications</h3>
                    <p>Check out my professional certifications</p>
                </Link>
                <Link to="/contact" className="nav-button">
                    <h3>Contact</h3>
                    <p>Get in touch with me</p>
                </Link>
            </div>
        </section>
    );
}

export default Home;