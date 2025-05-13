import React, { useState, useEffect } from 'react';
import './header.css';
import '../../index.css';
import useTexts from '../../hooks/useTexts';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
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

    const handleNavigation = (section) => {
        const isOnHome = window.location.pathname === '/portfolio';
        if (isOnHome) {
            scrollToSection(section);
        } else {
            navigate('/', { state: { scrollTo: section } });
        }
    };

    const scrollToSection = (section) => {
        const sectionMap = {
            about: 'about',
            projects: 'projects',
            contact: 'contact',
        };
        const el = document.getElementById(sectionMap[section]);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="header">
            <a href="/portfolio" className="header-logo">Copas Films</a>

            {isMobile ? (
                <>
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <button className="nav-option" onClick={() => handleNavigation('about')}>
                                    {texts.About_Header}
                                </button>
                                <button className="nav-option" onClick={() => handleNavigation('projects')}>
                                    {texts.Project_Header}
                                </button>
                                <Link to="/price">
                                    <button className="nav-option">
                                        {texts.Price_Header}
                                    </button>
                                </Link>
                                <button className="nav-option" onClick={() => handleNavigation('contact')}>
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
                            <button className="nav-option" onClick={() => handleNavigation('about')}>
                                {texts.About_Header}
                            </button>
                            <button className="nav-option" onClick={() => handleNavigation('projects')}>
                                {texts.Project_Header}
                            </button>
                            <Link to="/price">
                                <button className="nav-option">
                                    {texts.Price_Header}
                                </button>
                            </Link>
                            <button className="nav-option" onClick={() => handleNavigation('contact')}>
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