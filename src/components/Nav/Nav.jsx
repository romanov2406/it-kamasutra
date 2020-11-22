import React, { Component } from 'react'
import '../Nav/Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="item">
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className="item">
        <NavLink to="/dialog">Massages</NavLink>
      </div>
      <div className="item">
        <a>News</a>
      </div>
      <div className="item">
        <a>  Musik</a>
      </div>
      <div className="item">
        <a> Settings</a>
      </div>
    </nav>
  );
}
export default Nav