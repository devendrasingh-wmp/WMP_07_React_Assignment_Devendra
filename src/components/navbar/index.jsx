import React from 'react';
import { Link } from 'react-router-dom';
import './style.navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo'>
            React Assignment
      </div>
      <ul className="nav-links">

        {/* For Todo page */}
        <li><Link to="/todo">Todo List</Link></li>

      {/* For Post Selector page */}
        <li><Link to="/post-selector">Post Selector</Link></li>

        {/* For state and city select */}
        <li><Link to="/state-city-selector">State & City Selector</Link></li>
      </ul> 
    </nav>
  );
};

export default Navbar;