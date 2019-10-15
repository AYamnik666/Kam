import React from 'react';
import  s from '../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';


import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {updateNewMessageBodyCreator,sendMessageCreator} from './../../Redux/state';


const Dialogs = (props) =>{

    let state= props.store.getState().dialogsPage;

let dialogsElements= state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />) ;

let messagesElements = state.messages.map(m =>  <Message message={m.message}/>);

let newMessageBody = state.newMessageBody;

let onSendMessageClick = () =>{
    props.store.dispatch(sendMessageCreator());
}

let onNewMessageChange = (e) => {
    let body =e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
}



    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={s.message}>
                    <div>{messagesElements}</div>
                    <div>
                        <textarea placeholder='Enter your message' value= {newMessageBody} onChange= {onNewMessageChange} > </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;

