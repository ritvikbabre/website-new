import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

// Create a wrapper component to handle conditional header rendering
const AppContent = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div className="app">
            {!isHomePage && <Header />}
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
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
