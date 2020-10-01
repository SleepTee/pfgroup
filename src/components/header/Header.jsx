import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";

class Header extends React.Component {

    /*ShowLogin = () => {
        console.log("Прошло")
        document.getElementById('header_button').addEventListener("click", function() {
        document.querySelector('.modalPopup').style.display = "flex";
    })
    };*/

    render() {
        console.log()
    return (
    <header className="header">
        <nav className="header__menu">
            <ul className="header__links">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/News">Новости</Link></li>
                {/*<li><a href="#" id="header_button" onClick={()=>this.ShowLogin()}>Вход</a></li>*/}
                {/*<li><Link to="/auth">Регистрация</Link></li>*/}
                <li><Link to="/login">Форма входа v2.0</Link></li>
            </ul>
        </nav>
        <div className="modalPopup">
            <LoginPage />
        </div>
    </header>

);
}
}

export default Header