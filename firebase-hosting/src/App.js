import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

// Components
import NavigationComponent from './components/NavigationComponent';
import Login from './pages/Login/index';
import Storage from './pages/Storage/index';
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
						<Login />
						<hr />
						<Storage />
					</div>
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
