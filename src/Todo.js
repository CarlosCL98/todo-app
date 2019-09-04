import React from "react";
import "./TodoApp.css";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

export class Todo extends React.Component {
	
	render() {
		return (
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls={this.props.id}
					id={this.props.id}
				>
					<Typography variant="h5" component="h4">TODO {this.props.id}: {this.props.text}</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className="expansionPanelDetail">
					<ul>
						<li><b>Text:</b> {this.props.text}</li>
						<li><b>Priority:</b> {this.props.priority}</li>
						<li><b>Due Date:</b> {this.props.dueDate}</li>
					</ul>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	}
}
