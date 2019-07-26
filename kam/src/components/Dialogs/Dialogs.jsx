import React from 'react';
import  s from '../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) =>{
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <div className={s.dialog + ' ' + s.active }>
                        <NavLink to='dialogs/1' >John</NavLink></div>
                    <div className={s.dialog}>
                    <NavLink to='dialogs/2' >Bred</NavLink></div>
                    <div className={s.dialog}>
                    <NavLink to='dialogs/3' >Lola</NavLink></div>
                    <div className={s.dialog}>
                    <NavLink to='dialogs/4' >Mary</NavLink></div>
                    <div className={s.dialog}>
                    <NavLink to='dialogs/5' >Meth</NavLink></div>
                    <div className={s.dialog}>
                    <NavLink to='dialogs/5' >Poul</NavLink></div>
                </div>
                <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
            </div>

        </div>
    )
}

export default Dialogs;

