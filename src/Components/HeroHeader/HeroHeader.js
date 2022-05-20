import React from 'react';
import './HeroHeader.scss';
import { Container, Col, Row } from 'react-bootstrap';
function HeroHeader({ data }) {
	const { style, content, title } = data;

	return (
		<Container
			fluid
			style={style}
			className="heroHeader__container fluid__container"
		>
			<Row className="heroHeader__row heroHeaderAnimation  align-items-center">
				<Col className="p-0 heroHeader__col  col-12 col-md-8 col-xxl-6  offset-md-1">
					<h1 className="heroHeaderTitle" style={title?.style}>
						{title?.text}
					</h1>
					<p className="heroHeaderContent offset-md-2" style={content?.style}>
						{content?.text}
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default HeroHeader;
