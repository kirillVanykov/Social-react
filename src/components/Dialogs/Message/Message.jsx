import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
  const whoWriting1 = props.whoWriting;
  

    return (
      <div className={`${s.whoWriting1}`}>
        <div className={s.iconMessage}></div>
        <div className={s.message}>{props.message}</div>
      </div>
    )
}

export default Message;
