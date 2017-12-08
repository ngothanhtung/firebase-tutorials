import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

// Components
import NavigationComponent from './components/NavigationComponent';
import Gallery from './pages/Gallery/index';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	}

	handleToggle = () => this.setState({ open: !this.state.open });

	render() {
		return (
			<div className="container-fluid">
				<div>
					<NavigationComponent />
				</div>
				<div className="row">
					<div className="col-md-12">
						<Gallery />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
