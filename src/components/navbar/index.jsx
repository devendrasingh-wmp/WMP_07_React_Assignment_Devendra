import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.navbar.css';

/**
 * Navigation bar component to provide links for different pages.
 * Contains links to the Todo List, Post Selector, and State & City Selector pages.
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar"> {/* Container for the navigation bar */}
      <div className="logo"> {/* Logo section of the navbar */}
        React Assignment
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {/* Hamburger icon */}
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}> {/* List container for navigation links */}
        <li><Link to="/todo" onClick={() => setMenuOpen(false)}>Todo List</Link></li>
        <li><Link to="/post-selector" onClick={() => setMenuOpen(false)}>Post Selector</Link></li>
        <li><Link to="/state-city-selector" onClick={() => setMenuOpen(false)}>State & City Selector</Link></li>
      </ul> 
    </nav>
  );
};

export default Navbar;
