import React, { Component } from 'react';
import './../Dialogs.module.css';


const Message = (props) => {
    
   
        return (
            <div className="message active">{props.message}</div>
        )
   
}
export default Message