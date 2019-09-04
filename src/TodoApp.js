import React from "react";
import "./TodoApp.css";
import {TodoList} from "./TodoList";

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";

export class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: "", priority: "", dueDate: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="row TodoApp">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Paper className="paper">
                        <form className="form" onSubmit={this.handleSubmit}>
                            <h3>What else needs to be done?</h3>
                            <label>Insert your TODOs</label>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="textNewTodo">Text</InputLabel>
                                <Input id="textNewTodo"
                                       onChange={this.handleChange}
                                       value={this.state.text}
                                       placeholder="Text"/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="priorityNewTodo">Priority</InputLabel>
                                <Input id="priorityNewTodo"
                                       onChange={this.handleChange}
                                       value={this.state.priority}
                                       placeholder="Priority"/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <TextField
                                    id="dateNewTodo"
                                    label="Due Date"
                                    type="date"
                                    value={this.state.dueDate}
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>
                            <Button className=" " variant="contained" color="primary" type="onSubmit">
                                Add #{this.state.items.length + 1}
                            </Button>
                        </form>
                    </Paper>
                    <div className="row title">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h2>TODO List</h2>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <TodoList items={this.state.items}/>
                    <div id="footer"></div>
                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }

    handleChange(e) {
        if (e.target.id === "textNewTodo") {
            this.setState({text: e.target.value});
        } else if (e.target.id === "priorityNewTodo") {
            this.setState({priority: e.target.value});
        } else if (e.target.id === "dateNewTodo") {
            this.setState({dueDate: e.target.value});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
            id: this.state.items.length + 1
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: "",
            priority: "",
            dueDate: ""
        }));
    }
}