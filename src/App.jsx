import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<div>404: Page Not Found</div>} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
