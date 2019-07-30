import React from 'react';
import  s from '../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';


import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) =>{

let dialogs=[
    {    id:1,    name: 'Dima' }, 
    {    id:2,    name: 'Bred' },
    {    id:3,    name: 'Lola' },
    {    id:4,    name: 'Mary' },
    {    id:5,    name: 'Meth' },
    {    id:6,    name: 'Liza' }
]

let messages=[
    {id:1, message:'wwww'},
    {id:2, message:'Hi'},
    {id:3, message:'How are you?'},
    {id:4, message:'Yo'}
]

let dialogsElements= dialogs.map(d => <DialogItem name={d.name} id={d.id} />) ;
    
let messagesElements = messages.map(m =>  <Message message={m.message}/>)

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

