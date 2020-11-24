import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {
  
  


    let messages = props.state.message.map(mess => <Message message={mess.message} />)
    let dialog = props.state.dialog.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)


        return (
            <BrowserRouter>
                <div>
                    <div className="dialogTitle"> Dialogs </div>
                    <div className='dialogs'>
                        <div className='dialogs-item'>
                            {dialog}
                        </div>
                        <div className="messages">
                            {messages}
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
  
}

export default Dialogs