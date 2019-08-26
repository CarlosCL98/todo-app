import React from "react";
import "./TodoApp.css";
import {TodoList} from "./TodoList";

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
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <h3>TODO App</h3>
                    <TodoList items={this.state.items}/>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            What else needs to be done?
                        </label>
                        <br/>
                        <div className="form-group row">
                            <label htmlFor="textNewTodo" className="col-sm-2 col-form-label">Text</label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    id="textNewTodo"
                                    onChange={this.handleChange}
                                    value={this.state.text}
                                    placeholder="Text"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="priorityNewTodo" className="col-sm-2 col-form-label">Priority</label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    id="priorityNewTodo"
                                    onChange={this.handleChange}
                                    value={this.state.priority}
                                    placeholder="Priority"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="dateNewTodo" className="col-sm-2 col-form-label">Due Date</label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    id="dateNewTodo"
                                    onChange={this.handleChange}
                                    value={this.state.dueDate}
                                    type="date"
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary" type="onSubmit">
                            Add #{this.state.items.length + 1}
                        </button>
                    </form>
                </div>
                <div className="col-md-2"></div>
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
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}