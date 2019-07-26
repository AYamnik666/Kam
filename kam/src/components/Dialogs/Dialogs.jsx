import React from 'react';
import  s from '../Dialogs/Dialogs.module.css';

const Dialogs = (props) =>{
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    <div className={s.dialog + ' ' + s.active }>John</div>
                    <div className={s.dialog}>Bred</div>
                    <div className={s.dialog}>Lola</div>
                    <div className={s.dialog}>Mary</div>
                    <div className={s.dialog}>Meth</div>
                    <div className={s.dialog}>Poul</div>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;

