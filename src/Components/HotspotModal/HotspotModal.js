import React from 'react';
import './HotspotModal.scss';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

function HotspotModal({ data, closeModal }) {
	const { title, text, btn, image } = data;

	return (
		<div className="hotspotModal">
			<div className="hotspotModal__container">
				<p className="hotspotModal__title">{title}</p>
				<p className="hotspotModal__text">{text}</p>
				<NavLink className="hotspotModal__navLink" to={btn.link}>
					<span>{btn.text}</span>
				</NavLink>
			</div>
			<img src={image} className="hotspotModal__image" />

			<button
				onClick={() => closeModal()}
				className="hotspotModal__closeButton"
			>
				<IoMdClose size={25} />
			</button>
		</div>
	);
}

export default HotspotModal;
