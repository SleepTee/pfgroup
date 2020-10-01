import React from "react";
import "./Auth.css"
import {connect} from "react-redux";
import {addUsers} from "../../store/action/index"

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


class Auth extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        isAdmin: false
    };



    addUser = (e) => {
        e.preventDefault();
        this.props.addUsers(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.isAdmin);
        console.log(this.props.users)
    };


    changeHandler = (e) => {
        e.preventDefault();

        const {name, value} = e.target
        const ErrorSpan = document.getElementById("errorMessage");


        switch (name) {
            case "firstName" :
                this.setState({firstName: e.target.value});
                this.state.firstName = value.length < 3
                    ? "Слишком короткое имя"
                    : "";
                break;
            case "lastName" :
                this.setState({lastName: e.target.value});
                Error.lastName = value.length < 2
                    ? "Слишком короткая фамилия"
                    : "";
                break;
            case "email":
                Error.email = emailRegex.test(value)
                    ? ""
                    : "Не верно указана почта";
                break;
            case "password" :
                this.setState({password: e.target.value});
                Error.password = value.length < 3
                    ? "Очень простой пароль"
                    : "";
                break;
            default:
                break;
        }
    };

    addEmail = (e) => {
        this.setState({ email: e.target.value });
    };

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form onSubmit={this.addUser}  noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                className="firstName__input"
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                noValidate
                                value={this.state.firstName}
                                onChange={this.changeHandler}
                            />
                            <span className="errorMessage"></span>
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                className="lastName__input"
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                noValidate
                                value={this.state.lastName}
                                onChange={this.changeHandler}
                            />
                            <span className="errorMessage"></span>
                        </div>
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
                                onChange={this.changeHandler}
                            />
                            <span className="errorMessage"></span>
                        </div>
                        <div className="createAccount">
                            <button
                                type="submit">Create Account</button>
                            <small>Already Have an Account?</small>
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
    addUsers
};

export default connect(mapStateToProps,mapDispatchToProps)(Auth)