import React, { useContext } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../../Contexts/FavoriteContext';

function JobItem({ job, isFavorite }) {
	const [favorites, setFavorites] = useContext(FavoriteContext);
	const { id, title, date, categories, url } = job;
	const addToFavoritesHandler = (id) => {
		setFavorites((prevState) => [...prevState, id]);
	};
	const removeFromFavoritesHandler = (id) => {
		setFavorites((prevState) => prevState.filter((item) => item != id));
	};
	return (
		<div className="d-flex align-items-center">
			<Link to="/" className="careersOverview__link ">
				<div>
					<p className="careersOverview__dateText">{date.text}</p>
					<p className="careersOverview__titleText">{title.text}</p>
					<div className="careersOverview__categoriesContainer d-flex">
						{categories?.map((catagory, index) => {
							const { title, url } = catagory;
							return (
								<Link to="/" key={index}>
									{title.text}
								</Link>
							);
						})}
					</div>
				</div>
			</Link>
			<div className="careersOverview__favoritesContainer">
				{isFavorite ? (
					<div>
						<AiFillHeart
							color="#5563AD"
							size={35}
							onClick={() => removeFromFavoritesHandler(id)}
						/>
					</div>
				) : (
					<AiOutlineHeart
						color="#5563AD"
						size={35}
						onClick={() => addToFavoritesHandler(id)}
					/>
				)}
			</div>
		</div>
	);
}

export default JobItem;
