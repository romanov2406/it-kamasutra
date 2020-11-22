import React, { Component } from 'react'
import '../Nav/Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="item">
        <a>Profile</a>
      </div>
      <div className="item">
        <a>Massages</a>
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