import { useState } from 'react';
import { createContext } from 'react';

export const FavoriteContext = createContext();
export const FavoriteProvider = (props) => {
	const [favorites, setFavorites] = useState(
		JSON.parse(localStorage.getItem('favorites')) || []
	);
	return (
		<FavoriteContext.Provider value={[favorites, setFavorites]}>
			{props.children}
		</FavoriteContext.Provider>
	);
};
