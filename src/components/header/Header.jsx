import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";

function Header() {
    return (
    <header className="header">
        <nav className="header__menu">
            <ul className="header__links">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/News">Новости</Link></li>
                <li><Link to="/auth">Вход\Выход</Link></li>
            </ul>
        </nav>
    </header>
)
}

export default Header