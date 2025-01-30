import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Resume</Link></li>
                    <li><Link to="/certifications">Certifications</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;