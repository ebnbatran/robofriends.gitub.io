import React, { Component } from 'react';


class ErrorBoundry extends Component {
	
	constructor(props) {
		super();
		this.state = {
			hasError: false
		};
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1>Ooops! Something went wrong here</h1>;
		} else {
			return this.props.children;
		}
	}

}


export default ErrorBoundry;