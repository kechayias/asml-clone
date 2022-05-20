import React from 'react';
import Cards from '../../Components/Cards/Cards';
import CenteredText from '../../Components/CenteredText/CenteredText';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import RelatedArticles from '../../Components/RelatedArticles/RelatedArticles';
import RelatedContent from '../../Components/RelatedContent/RelatedContent';
import './Investors.css';
function Investors() {
	return (
		<section id="investors">
			<div>
				<HeroHeader data={data?.firstDiv} />
			</div>
			<div>
				<CenteredText data={data?.centeredText} />
			</div>
			<div>
				<Cards data={data?.cards1} />
			</div>
			<div>
				<Cards data={data?.cards2} />
			</div>
			<div>
				<Cards data={data?.cards3} />
			</div>
			<div>
				<RelatedContent data={data?.relatedContent} />
			</div>
			<div>
				<RelatedArticles data={data?.relatedArticles} />
			</div>
		</section>
	);
}

export default Investors;
const data = {
	firstDiv: {
		title: {
			text: 'Investors',
			style: { color: 'white' },
		},
		content: {
			text: 'Our investors help us make the impossible possible',
			style: { color: 'white' },
		},
		style: {
			background:
				'linear-gradient(to right,rgba(47, 48, 70, 1) -30%,rgba(41, 100, 100, 0) 120%),url(https://www.asml.com/-/media/asml/images/investors/47145-lithography-elements.jpg?mw=1920&rev=add5ce21a71d4d8795f352ce463d0dc2&hash=AFC738CEE89EF61EED2FDE26FC36F8DA)',
			height: '740px',
		},
	},
	centeredText: {
		style: { backgroundColor: 'white' },
		content: {
			text: 'Explore our financial results, share information, and strategy for growth as a leader in the competitive semiconductor industry.',
			style: {
				fontSize: '36px',
				fontWeight: '300',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: '#0F238C',
			},
		},
	},
	cards1: {
		style: { backgroundColor: 'white' },
		cards: [
			{
				title: { text: 'Annual reports', style: { color: '#0f238c' } },
				content: {
					text: 'ASML files its annual report with the US Securities Exchange Commission each year. Explore the results and download the complete report.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: {
					text: 'Latest financial results',
					style: { color: '#0f238c' },
				},
				content: {
					text: 'We release annual and quarterly financial results to ensure investors, both current and potential, are kept informed.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Financial strategy', style: { color: '#0f238c' } },
				content: {
					text: 'ASML plans for the road ahead. Read about our long-term financial strategy and expectations for growth in the industry.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: {
					text: 'Capital return and financing',
					style: { color: '#0f238c' },
				},
				content: {
					text: 'Read about our capital return policy as well as our current outstanding publicly traded bonds, credit ratings and standby facility.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
		],
	},
	cards2: {
		style: { backgroundColor: 'white' },
		cards: [
			{
				title: { text: 'Share buyback', style: { color: '#0f238c' } },
				content: {
					text: 'ASML returns cash to shareholders on a regular basis through share buybacks or capital repayment.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Financial calendar', style: { color: '#0f238c' } },
				content: {
					text: "Join ASML at one of our many financial events throughout the year, learning more about our place in the industry and how we're growing in it.",
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: {
					text: 'Past events & presentations',
					style: { color: '#0f238c' },
				},
				content: {
					text: 'Read about our past financial events and download presentations shared with investors.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Shareholder meetings', style: { color: '#0f238c' } },
				content: {
					text: 'Information and downloads from our most recent AGMs.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
		],
	},
	cards3: {
		style: { backgroundColor: 'white' },
		cards: [
			{
				title: { text: 'Investor days', style: { color: '#0f238c' } },
				content: {
					text: 'At our investor days, we keep current shareholders and prospective investors informed about the future of our industry and our role in it.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Share price', style: { color: '#0f238c' } },
				content: {
					text: 'Data from our Euronext and NASDAQ listings.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Analyst coverage', style: { color: '#0f238c' } },
				content: {
					text: 'Find out which sell-side analysts currently follow ASML.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: {
					text: 'Contact Investor Relations',
					style: { color: '#0f238c' },
				},
				content: {
					text: 'Find out who to contact for Investor Relations related questions in Europe, Asia, and the Americas.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
		],
	},
	relatedContent: {
		style: { backgroundColor: 'white' },
		title: {
			text: 'Related Content',
			style: {
				color: '#0F238C',
				fontSize: '56px',
				fontWeight: '300',
				span: 2,
				offset: 2,
				letterSpacing: '-2px',
				lineHeight: '56px',
			},
		},
		cards: [
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/39622-precision.jpg?mw=525&rev=b72e62912b9e4e90a84d1a6cda951dd4&hash=5CAEE9308B9CB34EEED0A663BA8E3D6C',
				},
				title: { text: 'ASML at a glance', style: { color: '#0F238C' } },
				content: {
					text: 'With 32,000 people and counting at over 60 locations worldwide, we are a growing global force in the semiconductor industry.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/about-asml/locations/veldhoven/45634-asml-campus-overview.jpg?mw=525&rev=1a462d131ef745f48302e2d83d88b2b1&hash=F068664100EAC9B32818E6D45271112D',
				},
				title: { text: 'Locations', style: { color: '#0F238C' } },
				content: {
					text: 'Three continents, 16 countries and regions, 60 locations. Find out more about what it’s like working at a world leader in the semiconductor industry.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/sustainability/42578-sustainability.jpg?mw=525&rev=6b0056d41c2b4261b79cdc92611eba53&hash=1F601D55DCD59F7F2F803C906DB7995A',
				},
				title: { text: 'Sustainability', style: { color: '#0F238C' } },
				content: {
					text: 'See how we’re helping to shape a sustainable future while contributing to the United Nations Sustainable Development Goals.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
		],
	},
	relatedArticles: {
		style: { backgroundColor: '#0F238C' },
		title: {
			text: 'Latest press releases',
			style: {
				fontSize: '56px',
				fontWeight: '300',
				color: 'white',
				lineHeight: '56px',
			},
		},
		articles: [
			{
				date: {
					text: 'April 1, 2022',
					style: { color: '#5563ad', fontSize: '16px' },
				},

				title: {
					text: 'Update on the 2022 Annual General Meeting of ASML Holding N.V.',
					style: {
						backgroundColor: 'white',
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
					},
				},
				link: { url: '/' },
			},
			{
				date: {
					text: 'March 15, 2022',
					style: { color: '#5563ad', fontSize: '16px' },
				},
				title: {
					text: 'ASML publishes agenda Annual General Meeting 2022',
					style: {
						backgroundColor: 'white',
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
					},
				},
				link: { url: '/' },
			},
			{
				date: {
					text: 'February 9, 2022',
					style: { color: '#5563ad', fontSize: '16px' },
				},
				title: {
					text: 'ASML publishes 2021 Annual Reports',
					style: {
						backgroundColor: 'white',
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
					},
				},
				link: { url: '/' },
			},
		],
	},
};
