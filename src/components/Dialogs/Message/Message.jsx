import React, { Component } from 'react';
import './../Dialogs.module.css';


class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            mes:props.message
        }
    }
    render() {
        console.log(this.state.mes);
        return (
            <div className="message active">{this.state.mes}</div>
        )
    }
}
export default Message