import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeroHeader from '../HeroHeader/HeroHeader';
import './TopDivs.scss';
function SecondTopDiv({ data }) {
	const { image, title, content } = data;
	return (
		<Container fluid className="secondTopDiv__container ">
			<Row className="secondTopDiv__row ">
				<Col
					className="col-12 secondTopDiv__col p-0 secondTopDiv__image"
					style={image}
				>
					<div className="heroHeaderAnimation">
						<HeroHeader title={title} content={content} />
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default SecondTopDiv;
