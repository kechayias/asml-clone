import React from 'react';
import CareersOverview from '../../../Components/CareersOverview/CareersOverview';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import './FindYourJob.css';
function FindYourJob() {
	return (
		<section id="findYourJob">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>
			<div>
				<CareersOverview data={data?.jobs} />
			</div>
		</section>
	);
}

export default FindYourJob;
const data = {
	heroHeader: {
		content: {
			text: 'Find your job',
			style: { color: 'white', fontWeight: '700', fontSize: '56px' },
		},
		style: {
			background: 'linear-gradient(45deg,#4b31d1,#b836f2 100%)',
			height: '278px',
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
