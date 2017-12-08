import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProductComponent from './pages/Product/Index';

import HeaderComponent from './components/HeaderComponent';
import AppBarComponent from './components/AppBarComponent';
import LeftMenuComponent from './components/LeftMenuComponent';

import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';

import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';


import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	}

	handleToggle = () => this.setState({ open: !this.state.open });

	render() {
		return (
			<div>
				<MuiThemeProvider>
					<div>
						<AppBar
							title="React Project (Firebase Hosting)"
							onLeftIconButtonTouchTap={this.handleToggle}
						/>
						<Drawer open={this.state.open}
							docked={false}
							onRequestChange={(open) => this.setState({ open })}
						>
							<MenuItem>Menu Item 1</MenuItem>
							<MenuItem>Menu Item 2</MenuItem>
							<MenuItem>Menu Item 3</MenuItem>
							<MenuItem>Menu Item 4</MenuItem>
							<MenuItem>Menu Item 5</MenuItem>
						</Drawer>

						<div className="row">
							<div className="col-md-3">
								<LeftMenuComponent />
							</div>
							<div className="col-md-9">
								<ProductComponent />
							</div>
						</div>
					</div>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default App;
