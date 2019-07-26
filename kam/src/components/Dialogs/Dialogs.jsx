import React from 'react';
import  s from '../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem =(props) =>{
    return(
        <div className={s.dialog + ' ' + s.active }>
        <NavLink to={'dialogs/' + props.id }>{props.name}</NavLink></div>
    )
}

const Message = (props) =>{
    return(
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) =>{
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <DialogItem name="Dima" id="1" />
                    <DialogItem name="Bred" id="2" />
                    <DialogItem name="Lola" id="3" />
                    <DialogItem name="Mary" id="4" />
                    <DialogItem name="Meth" id="5" />
                    <DialogItem name="Liza" id="6" />

                </div>
                <div className={s.message}>
                <Message message='wwww'/>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Yo'/>
            </div>
            </div>

        </div>
    )
}

export default Dialogs;

