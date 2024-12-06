import React from 'react';
import { Link } from 'react-router-dom';
import './style.navbar.css';

/**
 * Navigation bar component to provide links for different pages.
 * Contains links to the Todo List, Post Selector, and State & City Selector pages.
 */
const Navbar = () => {
  return (
    <nav className="navbar"> {/* Container for the navigation bar */}
      <div className='logo'> {/* Logo section of the navbar */}
            React Assignment
      </div>
      <ul className="nav-links"> {/* List container for navigation links */}
        
        {/* Link to the Todo page */}
        <li><Link to="/todo">Todo List</Link></li>

        {/* Link to the Post Selector page */}
        <li><Link to="/post-selector">Post Selector</Link></li>

        {/* Link to the State & City Selector page */}
        <li><Link to="/state-city-selector">State & City Selector</Link></li>
      </ul> 
    </nav>
  );
};

export default Navbar;
