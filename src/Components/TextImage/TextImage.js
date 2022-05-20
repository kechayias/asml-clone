import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './TextImage.css';
function TextImage({ data }) {
	const { title, content, style, image, rowStyle, video, link } = data;
	return (
		<Container fluid className="fluid__container" style={style}>
			<Row style={rowStyle}>
				<Col className="column col-md-4 offset-xxl-1 col-xxl-4 my-5 p-0">
					{image ? (
						<img src={image?.url} style={image?.style} />
					) : (
						<iframe
							style={video?.style}
							src={video?.url}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					)}
				</Col>
				<Col className="column col-md-5 offset-md-1 col-xxl-4 my-5 p-0">
					<div>
						<h1 style={title?.style}>{title?.text}</h1>
						{content?.text?.map((text, index) => {
							return <p style={content?.style}>{text}</p>;
						})}
						{link && (
							<NavLink style={link?.style} id={link?.type} to={link?.url}>
								<span>{link?.text}</span>
							</NavLink>
						)}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default TextImage;
