import React, { useContext } from 'react';
import CareersOverview from '../../Components/CareersOverview/CareersOverview';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import { FavoriteContext } from '../../Contexts/FavoriteContext';
function SavedJobs() {
	const [favorites] = useContext(FavoriteContext);
	return (
		<section id="findYourJob">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>
			<div>
				<CareersOverview
					data={data?.jobs.filter((item) => {
						const favorite = favorites.includes(item.id);
						return favorite;
					})}
				/>
			</div>
		</section>
	);
}

export default SavedJobs;
const data = {
	heroHeader: {
		content: {
			text: 'Your saved jobs',
			style: { color: 'white', fontWeight: '700', fontSize: '56px' },
		},
		style: {
			background: '#0F238C',
			height: '500px',
		},
	},
	jobs: [
		{
			id: 1,
			date: { text: 'Job - today' },
			title: { text: 'CS - DUV Customer Support Engineer - Taichung' },
			categories: [
				{ title: { text: 'Taichung, Taiwan' } },
				{ title: { text: 'Customer support' } },
			],
		},
		{
			id: 2,
			date: { text: 'Job - today' },
			title: {
				text: 'Computer Science Internship: Development of automatic measurement & analysis software',
			},
			categories: [
				{ title: { text: 'Veldhoven, Netherlands' } },
				{ title: { text: 'Research & development' } },
			],
		},
	],
};
