import React, { useState, useEffect } from 'react';
import './header.css';
import '../../index.css';
import useTexts from '../../hooks/useTexts';

const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }
};

const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
    }
};

const scrollToProject = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth" });
    }
};

const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    }
};

const Header = () => {
    const texts = useTexts();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            <a href="#home" className="header-logo">Copas Film</a>

            {isMobile ? (
                <>
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <button className="nav-option" onClick={() => { scrollToHome(); setMenuOpen(false); }}>
                                    {texts.Home_Header}
                                </button>
                                <button className="nav-option" onClick={() => { scrollToAbout(); setMenuOpen(false); }}>
                                    {texts.About_Header}
                                </button>
                                <button className="nav-option" onClick={() => { scrollToProject(); setMenuOpen(false); }}>
                                {texts.Project_Header}
                                </button>
                                <button className="nav-option" onClick={() => { scrollToContact(); setMenuOpen(false); }}>
                                {texts.Contact_Header}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </>
            ) : (
                <nav>
                    <ul>
                        <li>
                            <button className="nav-option" onClick={() => { scrollToHome(); setMenuOpen(false); }}>
                            {texts.Home_Header}
                            </button>
                            <button className="nav-option" onClick={() => { scrollToAbout(); setMenuOpen(false); }}>
                            {texts.About_Header}
                            </button>
                            <button className="nav-option" onClick={() => { scrollToProject(); setMenuOpen(false); }}>
                            {texts.Project_Header}
                            </button>
                            <button className="nav-option" onClick={() => { scrollToContact(); setMenuOpen(false); }}>
                            {texts.Contact_Header}
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
