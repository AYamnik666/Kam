import React from 'react';
import  s from '../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';


import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) =>{


    let newMessageElement = React.createRef();

    let addMessage =() =>{
        
        let text=newMessageElement.current.value;
        alert(text);
    }
    

    
  
    
let dialogsElements= props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />) ;
    
let messagesElements = props.state.messages.map(m =>  <Message message={m.message}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
{dialogsElements}




                </div>
                <div className={s.message}>
        
             
            </div>
            </div>
<textarea ref={newMessageElement}> </textarea>
<button onClick={addMessage}>Добавить сообщение</button>
        </div>
    )
}

export default Dialogs;

