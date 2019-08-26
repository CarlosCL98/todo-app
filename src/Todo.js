import React from "react";
import "./TodoApp.css";

export class Todo extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<p className="PTodo" id={this.props.id}>
                <b>Text:</b> {this.props.text}<br/>
                <b>Priority:</b> {this.props.priority}<br/>
                <b>Due Date:</b> {this.props.dueDate}
			</p>
		);
	}
}
