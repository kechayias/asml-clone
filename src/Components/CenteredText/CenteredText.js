import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './CenteredText.css';
function CenteredText({ data }) {
	const { content, style, link, title } = data;
	return (
		<Container
			fluid
			className="centeredText__container fluid__container"
			style={style}
		>
			<Row className="centeredText__row d-flex justify-content-center py-5">
				<Col className="centeredText__col col-12 col-md-8 col-xl-7 col-xxl-6 text-center">
					<h1 className="pb-3" style={title?.style}>
						{title?.text}
					</h1>
					<p className="pb-3" style={content?.style}>
						{content?.text}
					</p>
					{link && (
						<NavLink id={link?.type} to={link?.url}>
							<span style={link?.style}>{link?.text}</span>
						</NavLink>
					)}
				</Col>
			</Row>
		</Container>
	);
}

export default CenteredText;
