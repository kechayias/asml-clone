import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';
function Card({ card }) {
	return (
		<div className="card__container">
			<NavLink to={card?.link?.url}>
				{card?.image && (
					<img
						style={card?.image?.style}
						className="card__image"
						src={card?.image?.url}
					/>
				)}

				<div className="card__body">
					<p className="card__title" style={card?.title?.style}>
						{card?.title?.text}
					</p>
					<p className="card__content" style={card?.content?.style}>
						{card?.content?.text}
					</p>
				</div>
			</NavLink>
		</div>
	);
}

export default Card;
