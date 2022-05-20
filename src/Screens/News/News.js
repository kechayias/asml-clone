import React from 'react';
import Cards from '../../Components/Cards/Cards';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import RelatedArticles from '../../Components/RelatedArticles/RelatedArticles';
import './News.css';
function News() {
	return (
		<section id="news" className="news__container">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>
			<div>
				<Cards data={data?.cards} />
			</div>
			<div>
				<RelatedArticles data={data?.relatedArticles} />
			</div>
		</section>
	);
}

export default News;
const data = {
	heroHeader: {
		title: {
			text: 'News',
			style: { color: 'white' },
		},
		content: {
			text: 'An overview of our latest press releases and financial results, with links to our media library and media relations contacts',
			style: { color: 'white' },
		},
		style: {
			background:
				'url(https://www.asml.com/-/media/asml/images/news/43583-asml-news.jpg?mw=1920&rev=5ff2e458aa744cef8264fa3d7c3924ec&hash=30D4F4E294A19099EBFEAB63FFF912F4)',
			height: '740px',
		},
	},
	cards: {
		style: { backgroundColor: 'white' },
		cards: [
			{
				title: {
					text: 'Press releases & announcements',
					style: { color: '#0f238c' },
				},
				content: {
					text: 'Read our latest news and announcements, hot off the press.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Stories', style: { color: '#0f238c' } },
				content: {
					text: 'Let our people and technology inspire you, and read about what we’re doing in our communities.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Media library', style: { color: '#0f238c' } },
				content: {
					text: 'Download our company logo, and get access to photos of our technology, locations, and more.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Media contacts', style: { color: '#0f238c' } },
				content: {
					text: 'See an overview of our global and regional media relations contacts.',
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
