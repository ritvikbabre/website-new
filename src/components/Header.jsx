import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Certifications</Link></li>
                    <li><Link to="/home">Home</Link></li> {/* Add Home link */}
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;