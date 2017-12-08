import React, { Component } from 'react';
import GalleryList from './GalleryList';
import { client } from '../../client';
const url = '/getImages';

class GalleryIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			open: false,
			loading: true
		};
	}

	componentDidMount() {
		client.get(url).then(res => {
			const images = (res.data);
			this.setState({ loading: false });
			this.setState({ images: images });
		});
	}

	render() {
		if (this.state.loading === false) {
			return (
				<GalleryList images={this.state.images} />
			);
		} else {
			return (
				<h2>Loading ...</h2>
			);
		}
	}
}

export default GalleryIndex;