import React from 'react';
import '../assets/styles/components/Header.css'
import logo from '../assets/static/logo.png';
import menu from '../assets/static/menu.png';
import cart from '../assets/static/cart.png';
import userIcon from '../assets/static/user-icon.png';
import Search from '../components/Search.jsx'

const Header = () => (
    <header className="header">
        <div className="section1">
            <img className="header__img" src={logo} alt="RockStyle Market" />
            <div className="header__menu_list">
                <img className="header__menu_icon" src={menu} alt="" />
                <ul>
                    <li><a href="/">Una pieza</a></li>
                    <li><a href="/">Dos piezas</a></li>
                    <li><a href="/">Trikinis</a></li>
                    <li><a href="/">Asoleadores</a></li>
                </ul>
            </div>
        </div>
        <Search />
        <div className="section2">
            <img className="header__cart" src={cart} alt="" />
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="" />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </div>
    </header>
);

export default Header;