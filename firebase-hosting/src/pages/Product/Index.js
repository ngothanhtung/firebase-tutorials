import React, { Component } from 'react';
import ProductList from './Components/ProductList';

class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ShoppingCartItems: null,
			Products: null,
			open: false,
			loading: true
		};
	}

	componentDidMount() {
		this.state.ShoppingCartItems = JSON.parse(localStorage.getItem('shopping-cart') || '[]');

		// get json data from remote api
		fetch('https://slacklivechat.com/jsonplaceholder/products')
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
				<h2>Loadding ...</h2>
			);
		}
	}
}

export default Products;