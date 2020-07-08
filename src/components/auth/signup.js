import React from 'react';
// import { Button } from 'react-bootstrap';
import { LoginContext } from './context.js';
import Show from '../show/show.js';


class Login extends React.Component {

    static contextType = LoginContext;
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            roles:'',
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.context.signup(this.state.username, this.state.password, this.state.email, this.state.roles);
    }

    render() {
 
        return (
            <>
                
                <Show condition={!this.context.loggedIn}>
                    <form onSubmit={this.handleSubmit} >
                        <input 
                            placeholder="userName"
                            name="username"
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                         <input 
                            placeholder="Email"
                            name="email"
                            onChange={this.handleChange}
                        />
                          <input 
                            placeholder="roles"
                            name="roles"
                            onChange={this.handleChange}
                        />
                        <button>SignUp</button>
                    </form>
                </Show>
            </>
        )
    }

}

export default Login;