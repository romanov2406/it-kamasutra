import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




class Dialogs extends Component {
  
    dialogData = [
        {
            id: 1,
            name: 'Roman'
        },
        {
            id: 2,
            name: 'Ivan'
        },
        {
            id: 3,
            name: 'Stapan'
        },
        {
            id: 4,
            name: 'Taras'
        },

    ]


    dialogMessages = [
        {
            id: 1,
            message: 'Fuck you'
        },
        {
            id: 2,
            message: 'Ivan fddf'
        },
        {
            id: 3,
            message: 'Stapanfdfdfdfd'
        },
        {
            id: 4,
            message: 'Tarasfdfdfdfdfd'
        },

    ]


    messages = this.dialogMessages.map(mess => <Message message={mess.message} />)
    dialog = this.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="dialogTitle"> Dialogs </div>
                    <div className='dialogs'>
                        <div className='dialogs-item'>
                            {this.dialog}
                        </div>
                        <div className="messages">
                            {this.messages}
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Dialogs