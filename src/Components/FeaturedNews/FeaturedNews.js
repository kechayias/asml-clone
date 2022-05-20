import React from 'react';
import './FeaturedNews.css';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function FeaturedNews({ data }) {
	const { title, content, link, image } = data;

	return (
		<Container fluid className="featuredNews__container fluid__container ">
			<Row className="featuredNews__row py-5">
				<Col className="featuredNews__col p-0 col-12 col-md-7 col-lg-4 offset-lg-2">
					<h1 style={title?.style} className="title">
						{title?.text}
					</h1>
					<p style={content?.style} className="content">
						{content?.text}
					</p>
					<div>
						<NavLink id={link?.type} to={link.url}>
							<span style={link?.style}>{link?.text}</span>
						</NavLink>
					</div>
				</Col>
				<Col className="featuredNews__col p-0 col-12 col-md-5 col-lg-6">
					<img src={image?.url} style={image?.style} />
				</Col>
			</Row>
		</Container>
	);
}

export default FeaturedNews;
