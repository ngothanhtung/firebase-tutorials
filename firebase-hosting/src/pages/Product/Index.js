import React, { Component } from 'react';
import ProductList from './Components/ProductList';

class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Products: null,
			open: false,
			loading: true
		};
	}

	componentDidMount() {
		// get json data from remote api
		fetch('https://us-central1-fir-training-2c5ac.cloudfunctions.net/app/getProducts/')
			//fetch('http://localhost:3000/product/all')
			.then(res => res.json())
			.then((data) => {
				this.state.Products = data;
				this.setState({ loading: false });
				this.setState(this.state);
			});
	}

	render() {
		if (this.state.loading === false) {
			return (
				<ProductList products={this.state.Products} />
			);
		} else {
			return (
				<h2>Loading ...</h2>
			);
		}
	}
}

export default Products;