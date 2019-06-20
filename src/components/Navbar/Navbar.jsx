import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SiteBarFriends from './siteBarFriends/siteBarFriends';

const Navbar = (props) => {


    let newArrayFriends =
        props.state.friends.map( f => <SiteBarFriends name={f.name} foto={f.foto} /> );
    let cc = 0;
    let countFriends =
        props.state.friends.map( count => cc++ );


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.blockFriends}>
                <p>Friends { cc }</p>
                <div className={s.friends}>
                    { newArrayFriends }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
