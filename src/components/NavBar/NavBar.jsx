import React from 'react'; 
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item }>
                <NavLink to="/Profile" className ={navData => navData.isActive ? s.active: s.item}> Profile</NavLink>
            </div>           
            <div className={s.item}>
               <NavLink to="/Car" className = { navData => navData.isActive ? s.active : s.item }> Car</NavLink>
            </div><div className={s.item}>
                <NavLink to='/User' className = { navData => navData.isActive ? s.active : s.item }>User</NavLink>
            </div>
           
        </nav>

    )
}
/*className = { navData => navData.isActive ? s.active : s.item } новый синтаксис router dom, activeClassname dont work, создается новая переменяя далее стрелочная функция название переменной по синтаксису, далее s.active :s.item тут логично */
export default NavBar;