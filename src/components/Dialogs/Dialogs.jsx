import React, { Component } from 'react';
import s from './Dialogs.module.css';



class Dialogs extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={s.content}> Dialogs</div>
        )
    }
}

export default Dialogs