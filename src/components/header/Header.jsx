import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className='header'>
      <div className='logoContainer'>
        <img src="/logo.png" alt="Logo" className='logo' />
      </div>
      <nav>
        <ul className='navList'>
          <li>
            <a href="/" className='navLink'>Home</a>
          </li>
          <li>
            <a href="/courses" className='navLink'>Courses</a>
          </li>
          <li>
            <a href="/students" className='navLink'>Students</a>
          </li>
          <li>
            <a href="/trainers" className='navLink'>Trainers</a>
          </li>
          <li>
            <a href="/assignments" className='navLink'>Assignments</a>
          </li>
        </ul>
      </nav>
      <div className='searchContainer'>
        <input type="text" placeholder="Search..." className='searchBar' />
        <button className='searchButton'>Search</button>
      </div>
    </header>
  );
}

export default Header;
