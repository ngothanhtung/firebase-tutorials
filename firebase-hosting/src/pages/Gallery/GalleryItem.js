import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class GalleryItem extends Component {
	render() {
		const item = this.props.image;
		return (
			<Card>
				<CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
				<CardBody>
					<CardTitle>{item.title}</CardTitle>
					<CardSubtitle>{item.subTitle}</CardSubtitle>
					<CardText className="text-justify">{item.text}</CardText>
					<Button color="primary">Details</Button>
				</CardBody>
			</Card>
		);
	}
}

export default GalleryItem;
