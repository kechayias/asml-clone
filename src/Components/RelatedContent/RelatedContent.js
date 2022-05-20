import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from '../Card/Card';
import './RelatedContent.css';
function RelatedContent({ data }) {
	const { title, cards, style } = data;

	return (
		<Container
			fluid
			style={style}
			className="relatedContent__container fluid__container "
		>
			<Row className="relatedContent__row py-5">
				<Col className="relatedContent__col p-0 col-md-4 col-lg-2 offset-md-2">
					<p style={title?.style}>{title?.text}</p>
				</Col>
				{cards?.map((card, index) => {
					return (
						<Col
							key={index}
							xl={{ offset: 0 }}
							lg={{ offset: index == 0 && 2 }}
							md={{ offset: index == 1 ? 2 : 0 }}
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

export default RelatedContent;
