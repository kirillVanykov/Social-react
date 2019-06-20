import React from 'react';
import s from './siteBarFriends.module.css';

const SiteBarFriends = (props) => {
    return (
      <div className={s.wrapper}>
        <img src={props.foto} alt=""/>
        <p>{props.name}</p>
      </div>
    )
}

export default SiteBarFriends;
