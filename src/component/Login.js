import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'

export class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {email:"", password:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //Save data
        localStorage.setItem("email", "carlos.medina@gmail.com");
        localStorage.setItem("password", "carlos.medina");
        localStorage.setItem("isLoggedIn", "false");
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon/>
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleChange(e) {
        if (e.target.id === "email") {
            this.setState({email: e.target.value});
        } else if (e.target.id === "password") {
            this.setState({password: e.target.value});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        if (!this.state.email.length || !this.state.password.length) {
            return;
        }
        //Read data
        const emailStored = localStorage.getItem("email");
        const passwordStored = localStorage.getItem("password");
        if (emailStored === this.state.email && passwordStored === this.state.password){
            this.props.handler(true);
        } else {
            this.props.handler(false);
        }
        this.setState(prevState => ({
            email: "",
            password: ""
        }));
    }
}