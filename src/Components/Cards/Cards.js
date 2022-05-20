import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Card from '../Card/Card';
import './Cards.css';
function Cards({ data }) {
	const { cards, style, title } = data;
	return (
		<Container
			style={style}
			fluid
			className="cards__container fluid__container"
		>
			<Row className="cards__row py-5 d-flex d-column">
				{title && (
					<Col className="relatedContent__col p-0 col-12 text-center">
						<p style={title?.style}>{title?.text}</p>
					</Col>
				)}
				{cards?.map((card, index) => {
					return (
						<Col
							md={{ offset: index == 0 || index == 2 ? 2 : 0 }}
							xl={{ offset: index == 0 ? 2 : 0 }}
							key={index}
							className="cards__col col-12 col-xl-2 col-md-4 p-0"
						>
							<Card card={card} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default Cards;
