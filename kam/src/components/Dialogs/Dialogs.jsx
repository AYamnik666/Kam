import React from 'react';
import  s from '../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';


import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) =>{


let dialogsElements= props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />) ;
    
let messagesElements = props.messages.map(m =>  <Message message={m.message}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
{dialogsElements}




                </div>
                <div className={s.message}>
          {messagesElements}
             
            </div>
            </div>

        </div>
    )
}

export default Dialogs;

