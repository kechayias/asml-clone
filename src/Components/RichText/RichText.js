import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function RichText({ data }) {
	const { title, content, style, btn } = data;
	return (
		<Container fluid className="fluid__container" style={style}>
			<Row>
				<Col className="col-12 offset-md-2 col-md-8 p-0 my-5">
					<h1 style={title?.style}>{title?.text}</h1>
					{content?.text?.map((text) => {
						return <p style={content?.style}>{text}</p>;
					})}
					{btn && (
						<NavLink style={btn?.style} id="customButton1" to={btn?.link}>
							<span>{btn?.text}</span>
						</NavLink>
					)}
				</Col>
			</Row>
		</Container>
	);
}

export default RichText;
