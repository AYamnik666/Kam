import React from 'react';
import s from './Navbar.module.css';

/*
let s ={
	'nav': 'Navbar_nav__3ou9Q',
	'item': 'Navbar_item__3qaF3'
}
*/
class Navbar extends React.Component{
    render(){
        return (
            <nav className={s.nav}>
			<div className={s.item}>
				<a>Profile</a>
			</div>
			<div className= {`${s.item} ${s.active}`}>
				<a>Messages</a>
				</div>
			<div className={s.item}>
			<a>News</a>
				</div>
			<div className={s.item}> 
			<a>Music</a>
				</div>
				<div className={s.item}>
			<a>Settinngs</a>
				</div>
		</nav>
        )

        }
    
}

export default Navbar;