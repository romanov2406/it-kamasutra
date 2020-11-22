import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './../Dialogs.module.css';

const DialogItem = (props) => {
        let path = "/dialog/" + props.id
        return (
            <div className='dialog'>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        )
  
}

export default DialogItem