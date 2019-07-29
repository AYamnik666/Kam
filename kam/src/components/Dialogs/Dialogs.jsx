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

let dialogsData=[
    {    id:1,    name: 'Dima' }, 
    {    id:2,    name: 'Bred' },
    {    id:3,    name: 'Lola' },
    {    id:4,    name: 'Mary' },
    {    id:5,    name: 'Meth' },
    {    id:6,    name: 'Liza' }
]

let messagesData=[
    {id:1, message:'wwww'},
    {id:2, message:'Hi'},
    {id:3, message:'How are you?'},
    {id:4, message:'Yo'}
]


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />


                </div>
                <div className={s.message}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
             
            </div>
            </div>

        </div>
    )
}

export default Dialogs;

