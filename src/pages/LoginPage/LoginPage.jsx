import React from "react";
import {connect} from "react-redux";
import {LoginUser} from "../../store/action/index";
import "./LoginPage.css"


class LoginPage extends React.Component {
    state = {
        email: "",
        password: "",
        isAdmin: false
    };

    LoginUser = (e) => {
        e.preventDefault();
        this.props.LoginUser(this.state.email, String(this.state.password));
        console.log(this.state)
    };


    addPassword = (e) => {
        this.setState({ password: e.target.value });
    };
    addEmail = (e) => {
        this.setState({ email: e.target.value });
    };

    closePoPup = () => {
        document.querySelector('.closePopup').addEventListener("click", function() {
            document.querySelector('.modalPopup').style.display = "none";
        });
    };

    render() {
        return (
            <div className="wrapper1">
                <div className="form-wrapper">
                    <div className="close">
                    <a href="#" className="closePopup" onClick={()=>this.closePoPup()}>Close</a>
                    </div>
                    <h1>Log In</h1>
                    <form onSubmit={this.LoginUser}  noValidate>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                className="email__input"
                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                value={this.state.email}
                                onChange={this.addEmail}
                            />
                            <span className="errorMessage"></span>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                className="password__input"
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                value={this.state.password}
                                onChange={this.addPassword}
                            />
                            <span className="errorMessage"></span>
                        </div>
                        <div className="createAccount">
                            <button
                                type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    users : state
});

const mapDispatchToProps = {
    LoginUser
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)