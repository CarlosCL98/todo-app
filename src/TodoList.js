import React from "react";
import './TodoApp.css';
import {Todo} from "./Todo";

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        const todoList = this.props.items;
        const todo = todoList.map((todo, i) => (
            <li key={"todo_" + i} className="UlItem">
                <Todo id={todo.id} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}></Todo>
            </li>
            )
        );
        return (
            <ul className="TodoUl">{todo}</ul>
        );
    }
}