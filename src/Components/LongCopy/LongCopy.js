import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './LongCopy.css';
function LongCopy({ data }) {
	const { title, content, style } = data;
	return (
		<Container style={style} fluid className="fluid__container">
			<Row>
				<Col className="col-12 p-0 col-md-7 col-lg-5 offset-md-2">
					<h1 style={title?.style}>{title?.text}</h1>

					{content?.text?.map((text, index) => {
						return (
							<p key={index} style={content?.style}>
								{text}
							</p>
						);
					})}
				</Col>
			</Row>
		</Container>
	);
}

export default LongCopy;
