import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./Dialogitems/Dialogitem";
const Dialogs = (props) => {

    let dialogsElements = props.state.dialogData.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.state.messageData.map( m => <Message message={m.message}/>)
    let newPostElements = React.createRef();
    let addmessage = () =>{
        let text = newPostElements.current.value;
        props.addMessage(text);
        newPostElements.current.value='';
    }
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItems}>
                {dialogsElements}
            </div>
            <div className={s.Messages}>
                {messagesElements}
                <textarea className={s.textarea} ref={newPostElements}></textarea><div></div><button className={s.addbut} onClick={addmessage} >Отправить</button>

            </div>




        </div>

    )
}
export default Dialogs;