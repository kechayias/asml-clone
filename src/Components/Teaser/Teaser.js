import React from 'react';
import { NavLink } from 'react-router-dom';
import './Teaser.css';

function Teaser({ teaser }) {
	const { title, content, style, image, link } = teaser;
	return (
		<NavLink to={link?.url} style={style} className="teaser__card">
			<div className="teaser__imageContainer">
				<img src={image?.url} />
				<div />
			</div>
			<div className="teaser__body">
				<p>
					{title?.text}
					<span>{content?.text}</span>
				</p>
			</div>
		</NavLink>
	);
}

export default Teaser;
