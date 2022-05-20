import React, { useRef } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './TeaserList.css';
import Teaser from '../Teaser/Teaser';

function TeaserList({ data }) {
	const { title, content, teasers, style } = data;
	const innerSlider = useRef();
	const slider = useRef();
	let startx;
	let pressed;
	let x;

	const mouseDownHandler = (e) => {
		pressed = true;
		startx = e.pageX - innerSlider.current.offsetLeft;
		slider.current.style.cursor = 'pointer';
	};

	const mouseUpHandler = () => {
		slider.current.style.cursor = 'default';
		checkBoxLimits();
	};
	window.addEventListener('mouseup', () => {
		pressed = false;
	});
	const mouseLeaveHandler = () => {
		pressed = false;
		checkBoxLimits();
	};
	const mouseMoveHandler = (e) => {
		if (!pressed) return;
		e.preventDefault();
		x = e.pageX;
		innerSlider.current.style.left = `${x - startx}px`;
	};

	const checkBoxLimits = () => {
		let outer = slider.current.getBoundingClientRect();
		let inner = innerSlider.current.getBoundingClientRect();
		if (innerSlider.current.offsetLeft >= 0) {
			innerSlider.current.style.left = `0`;
		} else if (inner.right <= outer.right) {
			innerSlider.current.style.left = `-${inner.width - outer.width}px`;
		}
	};
	return (
		<Container
			style={style}
			fluid
			className="teaserList__container fluid__container"
		>
			<Row className="teaserList__row d-flex align-items-center">
				<Col className="teaserList__col p-0  offset-1 col-11 col-xl-3">
					<p style={content?.style}>{content?.text}</p>
					<h1 style={title?.style}>{title?.text}</h1>
				</Col>
				<Col className="teaserList__col col-12 col-xl-8 p-0">
					<div
						className="slider"
						ref={slider}
						onMouseLeave={mouseLeaveHandler}
						onMouseDown={mouseDownHandler}
						onMouseMove={mouseMoveHandler}
						onMouseUp={mouseUpHandler}
					>
						<div ref={innerSlider} className="slider__inner">
							{teasers?.map((teaser, index) => {
								return <Teaser key={index} teaser={teaser} />;
							})}
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default TeaserList;
