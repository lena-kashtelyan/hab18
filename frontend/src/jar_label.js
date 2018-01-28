import React, { Component } from 'react';
import './App.css';

class JarLabel extends Component {

 	componentWillReceiveProps(newProps) {
		this.setState({
		  config: newProps.config,
		})
	}

	constructor(props) {
		super(props);
		this.state = { config: props.config };
	}

	render() {
		<div>
			<h1 className="title">this.props.title</h1>
			<div className="jar-picture"></div>
			<div className="info-row">
				<ul>
					<li>
						<h3>Members</h3>
						<p>{this.props.numpeople}</p>
					</li>
					<li>
						<h3>Commitment</h3>
						<p>{this.props.timespan}</p>
					</li>
					<li>
						<h3>Cost per Violation</h3>
						<p>{this.props.cost}</p>
					</li>
				</ul>
			</div>
			<div className="progress">
				<div className="progress-bar"></div>
				<div className="time-left">
					<h3>d day</h3>
					<p>{this.props.currTime} day left</p>
				</div>
			</div>
		</div>
	}

}