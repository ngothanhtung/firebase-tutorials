import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

class ProductList extends Component {
	render() {
		return (
			<div>
				{
					this.props.products.map((p) =>

						<ProductItem key={p.name} product={p} />
					)
				}
			</div>
		);
	}
}

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
}

export default ProductList;
