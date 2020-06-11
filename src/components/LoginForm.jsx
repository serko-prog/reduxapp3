import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeEmail, changePassword } from "../store/actions";

class LoginForm extends React.Component {
    render () {
        const { email, password, changeEmail, changePassword } = this.props;
        return <div>
            <div>
                <label htmlFor="email">E-mail: </label><input type="text" id="email" value={email} onChange={(event) => changeEmail(event.target.value)}/>
            </div>
            <div>
                <label htmlFor="password" >Password: </label><input type="text" id="password" value={password} onChange={(event) => changePassword(event.target.value)}/>
            </div>
            <div><label htmlFor="result">Result: </label><span id="result">{email} {password}</span>
            </div>
        </div>
    }
}
const mapState = (state) => ({
    email: state.email, 
    password: state.password,
});

const mapDispatch = (dispatch) => ({
    changeEmail: bindActionCreators(changeEmail, dispatch),
    changePassword: bindActionCreators(changePassword, dispatch),
});

const LoginFormConnected = connect(mapState, mapDispatch)(LoginForm);

export default LoginFormConnected;