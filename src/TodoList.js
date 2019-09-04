import React from "react";
import './TodoApp.css';
import {Todo} from "./Todo";

export class TodoList extends React.Component {

    render(){
        const todoList = this.props.items;
        const todos = todoList.map((todo, i) => (
                <Todo id={todo.id} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}></Todo>
            )
        );
        return (
            <div>
                {todos}
            </div>
        );
    }
}