import React from 'react';
import  s from './Header.module.css';
class Header extends React.Component{
    render(){
        return (
            <header className={s.header}>
			<img src='https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00106-3D-company-logo-design-free-logo-online-Template-03.png'></img>
		</header>
        )

        }
    
}

export default Header;