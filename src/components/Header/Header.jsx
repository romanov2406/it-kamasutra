import React, { Component } from 'react'
import '../Header/Header.css';

let img = {
    width: "100px",
    height: "60px"
}

const Header = () => {
    return (
        <header className="header">
            <img src="https://logomaster.ai/static/media/sample.c8bf2b04.svg" style={img} />
        </header>
    );
}
export default Header