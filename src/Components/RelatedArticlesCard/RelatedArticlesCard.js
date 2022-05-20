import React from 'react';
import { NavLink } from 'react-router-dom';
import './RelatedArticlesCard.css';
function RelatedArticlesCard({ article }) {
	const { link, image, date, title } = article;
	return (
		<div className="relatedArticleCard__container">
			<NavLink to={link}>
				<img src={image} className="relatedArticleCard__image" />
				<div style={title?.style} className="relatedArticleCard__body">
					<span style={date?.style}>{date?.text}</span>
					<p>{title?.text}</p>
				</div>
			</NavLink>
		</div>
	);
}

export default RelatedArticlesCard;
