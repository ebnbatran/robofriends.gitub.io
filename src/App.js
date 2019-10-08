import React, { Component } from 'react';
import CardList from './CardList';
import Search from './Search';
import { robots } from './robots';


class App extends Component {
	
	constructor() {
		super();

		this.state = {
			robots: robots,
			searchField: ''
		};
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	}

	render() {
		const filteredRobots = this.state.robots.filter(
			robot => {
				return robot.name.toLowerCase().includes(
					this.state.searchField.toLowerCase()
				);
			}
		);

		return (
			<div className='tc'>
				<h1>RoboFriends</h1>
				<Search searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}


export default App;