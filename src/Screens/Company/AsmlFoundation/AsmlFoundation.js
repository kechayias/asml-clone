import React from 'react';
import Cards from '../../../Components/Cards/Cards';
import Figures from '../../../Components/Figures/Figures';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import TextImage from '../../../Components/TextImage/TextImage';
import './AsmlFoundation.css';
function AsmlFoundation() {
	return (
		<section id="microchipBasics">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>
			<div>
				<Figures />
			</div>
			<div>
				<TextImage data={data?.textImage} />
			</div>

			<div>
				<Cards data={data?.cards} />
			</div>
		</section>
	);
}

export default AsmlFoundation;
const data = {
	heroHeader: {
		title: {
			text: 'CustomerNet',
			style: { color: 'white' },
		},
		content: {
			text: 'Join the secure online portal exclusively for registered ASML customers',
			style: {
				color: 'white',
			},
		},
		style: {
			background:
				'linear-gradient(to right,rgba(47, 48, 70, 1) -30%,rgba(41, 100, 100, 0) 120%),url(https://www.asml.com/-/media/asml/images/company/asml-foundation/cini-india.jpg?mw=1920&rev=1c5bc94347c849e9a48353d77ccaccfa&hash=4B1364FBA6C1F6F808398A2EA548268F)',
			height: '1020px',
		},
	},

	textImage: {
		style: { backgroundColor: 'white' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: 'The ASML Foundation is an independent Dutch charity with strong ties to ASML which funds education initiatives to increase the self-sufficiency of young people in need, in the countries where ASML operates.',
			style: {
				color: '#0F238C',
				fontSize: '28px',
				fontWeight: '300',
				lineHeight: '36px',
				letterSpacing: '-1px',
			},
		},
		content: {
			text: [
				'Through the funding of educational projects and training programs, we aim to enable the inclusion and equal participation of young people in their communities, and to unlock their potential for a greater future.',
				'The ASML Foundation was established as an independent nonprofit in 2001 by ASML, which still strongly supports the Foundation. Read more about the mission and history of the ASML Foundation.',
				'The Foundation also coordinates ASML’s global volunteering program, encouraging employees to become more involved in their local communities. Everyone is able to use eight hours a year as a paid volunteering day with the event, charity or activity of their choice that aligns with our volunteering policy. Employees can also volunteer with ASML Foundation projects.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/company/asml-foundation/projects/plan-international-china-volunteer.jpg?mw=1200&rev=31bb3df7aefb4aefaceb915d4d1de481&hash=1C76CE99AA4E7776E014A6D48A4EAAED',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},
	cards: {
		style: { backgroundColor: '#EFF2F4' },
		cards: [
			{
				title: {
					text: 'About us',
					style: {
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
						letterSpacing: '-0.6px',
						lineHeight: '20px',
					},
				},
				content: {
					text: 'As a foundation that supports education projects not only in the Netherlands but around the world, we aim to improve the lives of the young people within our reach. Learn more about our mission, history and strategy.',
					style: { color: '#555464', fontSize: '16px', lineHeight: '20px' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/asml-foundation/plan-international-china.jpg?mw=525&rev=28d6e596d6e04c25b260658a626a0ab8&hash=85BA94C9E60E36BFEAE7D7FC200FC11F',
				},
				link: {
					url: '/',
				},
			},
			{
				title: {
					text: 'Apply for a grant',
					style: {
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
						letterSpacing: '-0.6px',
						lineHeight: '20px',
					},
				},
				content: {
					text: 'Learn how to apply for grants from the ASML Foundation, including our requirements and how to submit the grant application form.',
					style: { color: '#555464', fontSize: '16px', lineHeight: '20px' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/asml-foundation/apply-for-support.jpg?mw=525&rev=35d2a97896964d41b2dfd3250cd8889d&hash=90EB99AD6B13EA096D97FFA713AEF35B',
				},
				link: {
					url: '/',
				},
			},
			{
				title: {
					text: 'Our projects',
					style: {
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
						letterSpacing: '-0.6px',
						lineHeight: '20px',
					},
				},
				content: {
					text: 'Read a selection of success stories from grants for educational programs we’ve awarded since our inception in 2001.',
					style: { color: '#555464', fontSize: '16px', lineHeight: '20px' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/asml-foundation/projects/sil-china.jpg?mw=525&rev=d18963a086be4c168a5e8804d5e687a2&hash=F63F5C8C808F2C0BD3F7B162FD38450D',
				},
				link: {
					url: '/',
				},
			},
			{
				title: {
					text: 'Financials',
					style: {
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
						letterSpacing: '-0.6px',
						lineHeight: '20px',
					},
				},
				content: {
					text: 'Overview of ASML Foundation annual financial figures.',
					style: { color: '#555464', fontSize: '16px', lineHeight: '20px' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/asml-foundation/financials.png?mw=525&rev=42a6db8625d1413d897db6186d093949&hash=C1333A2C00CCCB896AB603173146594A',
				},
				link: {
					url: '/',
				},
			},
		],
	},
};
