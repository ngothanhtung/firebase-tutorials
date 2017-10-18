import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

class ProductList extends Component {
	render() {
		return (
			<div>
				{
					this.props.products.map((p) =>
						<div key={p._id}>
							<ProductItem product={p} />
						</div>
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
