import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';

class GalleryList extends Component{
	render() {
		return (
			<div className="row">
				{
					this.props.images.map(x => (
						<div className="col-md-3">
							<GalleryItem key={x.title} image={x} />
						</div>
					))
				}
			</div>
		);
	}
}

GalleryList.propTypes = {
	images: PropTypes.array.isRequired,
}

export default GalleryList;
