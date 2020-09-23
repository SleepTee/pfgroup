import React from "react";
import "./Auth.css"
import {connect} from "react-redux";



class Auth extends React.Component {
    render() {
        const formError = this.props.formErrors;
        console.log(this.props.formErrors);
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    <form  noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                className="firstName__input"
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                noValidate
                                /*onChange=*/
                            />
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                className="lastName__input"
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                noValidate
                                /*onChange=*/
                            />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                className="email__input"
                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                /*onChange=*/
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                className="password__input"
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                /*onChange=""*/
                            />
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already Have an Account?</small>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
    formErrors : state.Authorizations
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps,mapDispatchToProps)(Auth)