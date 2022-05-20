import React, { useContext } from 'react';
import './CareersOverview.css';
import { Col, Row, Container } from 'react-bootstrap';
import { FavoriteContext } from '../../Contexts/FavoriteContext';
import { useEffect } from 'react';
import JobItem from '../JobItem/JobItem';

function CareersOverview({ data }) {
	const [favorites, setFavorites] = useContext(FavoriteContext);

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	return (
		<Container fluid className="careersOverview__container fluid__container">
			<Row>
				{data?.map((job) => {
					const { id } = job;
					const favorite = favorites.includes(id);

					return (
						<Col
							key={id}
							className=" careersOverview__col offset-xl-2 col-xl-6 col-12 p-0 my-5 py-2"
						>
							<JobItem job={job} isFavorite={favorite} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
}

export default CareersOverview;
