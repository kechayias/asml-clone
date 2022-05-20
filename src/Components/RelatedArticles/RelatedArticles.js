import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RelatedArticlesCard from '../RelatedArticlesCard/RelatedArticlesCard';
import './RelatedArticles.css';
function RelatedArticles({ data }) {
	const { style, articles, title } = data;
	return (
		<Container
			fluid
			className="relatedArticles__container fluid__container"
			style={style}
		>
			<Row className="relatedArticles__row py-5 d-flex d-column justify-content-center">
				<Col className="relatedArticles__col col-12 col-xl-2 col-md-8 p-0">
					<p style={title?.style}>{title?.text}</p>
				</Col>
				{articles?.map((article, index) => {
					return (
						<Col
							className="relatedArticles__col col-12 col-xl-2 col-md-8  p-0 "
							key={index}
						>
							<RelatedArticlesCard article={article} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default RelatedArticles;
