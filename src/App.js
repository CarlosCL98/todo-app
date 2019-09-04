import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./component/Login.js";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {TodoApp} from "./TodoApp";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.state = {isLoggedIn: localStorage.getItem("isLoggedIn")};
        this.LoginView = () => (
            <Login handler={this.handleSignIn} />
        );
        this.TodoView = () => (
            <TodoApp />
        );
    }

    render () {
        return (
            <Router>
                <div className="App">
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6">
                                TODO React App
                            </Typography>
                            <Typography className="links" variant="h8">
                                {this.state.isLoggedIn === "true" ?
                                    <Link to="/todo">Log out</Link> :
                                    <Link to="/">Log in</Link>
                                }
                            </Typography>
                            <Typography className="links" variant="h8">
                                {this.state.isLoggedIn === "true" ?
                                    <Link to="/todo">TodoApp</Link> :
                                    <Link to="/">TodoApp</Link>
                                }
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div>
                        {this.state.isLoggedIn === "true" ?
                            <Route path="/todo" component={this.TodoView}/> :
                            <Route exact path="/" component={this.LoginView}/>
                        }
                    </div>
                </div>
            </Router>
        );
    }

    handleSignIn(e) {
        this.setState(prevState => ({
            isLoggedIn: e.toString()
        }));
        localStorage.setItem("isLoggedIn", e);
    }
}

export default App;
