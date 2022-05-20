import React from 'react';
import './Home.css';

import TeaserList from '../../Components/TeaserList/TeaserList';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import RelatedArticles from '../../Components/RelatedArticles/RelatedArticles';
import CenteredText from '../../Components/CenteredText/CenteredText';
import FeaturedNews from '../../Components/FeaturedNews/FeaturedNews';

function Home() {
	return (
		<section id="home" className="home">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>
			<div>
				<CenteredText data={data?.centeredText1} />
			</div>
			<div>
				<FeaturedNews data={data?.featuredNews} />
			</div>
			<div>
				<CenteredText data={data?.centeredText2} />
			</div>
			<div>
				<TeaserList data={data?.teaserList} />
			</div>
			<div>
				<RelatedArticles data={data.relatedArticles} />
			</div>
		</section>
	);
}

export default Home;

const data = {
	heroHeader: {
		title: {
			text: 'Changing the world, one nanometer at a time',
			style: { color: 'white' },
		},
		content: {
			text: "ASML gives the world's leading chipmakers the power to mass produce patterns on silicon",
			style: { color: 'white' },
		},
		style: {
			background:
				'linear-gradient(to right,rgba(47, 48, 70, 1) -30%,rgba(41, 100, 100, 0) 120%),url(https://www.asml.com/-/media/asml/images/home/hero-people.jpg?mw=1920&rev=4ba20e0e06c0420c877f281e04213108&hash=781BA6A521FCB83EFCB2252A55D9A2B6)',
			height: '120vh',
		},
	},
	centeredText1: {
		style: {},
		title: {
			text: "We're moving technology forward",
			style: { color: '#0f238c', fontSize: '56px', fontWeight: '700' },
		},
		content: {
			text: 'In fact, we’re probably a part of the electronic device you’re using right now. Our lithography technology is fundamental to mass producing semiconductor chips. With it, the world’s top chipmakers are creating microchips that are more powerful, faster and energy efficient.',
			style: {
				color: '#555464',
				fontSize: '28px',
				fontWeight: '300',
				lineHeight: '32px',
			},
		},
		link: {
			type: 'customLink1',
			text: 'Sea all products',
			url: '/products',
			style: { color: '#0F238C', fontSize: '20px', fontWeight: '700' },
		},
	},
	featuredNews: {
		title: {
			text: 'Busting ASML myths',
			style: { color: '#0f238c' },
		},
		content: {
			text: 'True or false? Test your knowledge about ASML',
			style: { color: '#555464' },
		},
		link: {
			type: 'customLink1',
			text: 'Read the story',
			url: '/',
			style: { color: '#0F238C', fontSize: '20px', fontWeight: '700' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/news/stories/2022/busting-asml-myths/asml_myths_header.png?mw=1200&rev=226241c20688425d89ae109d03020e0d&hash=09FAE0216E23A630488610F072B3C2DB',
			style: { objectFit: 'cover', width: '100%' },
		},
	},
	centeredText2: {
		style: { background: 'linear-gradient(45deg,#0f238c,#00a3e0 100%)' },
		title: {
			text: 'What’s it like to be on the ASML team?',
			style: { color: 'white', fontSize: '56px', fontWeight: '700' },
		},
		content: {
			text: 'In this interactive section you will hear from our employees. You’ll also discover how we foster your well-being and what our networks and clubs are like. We’ll show you how you’ll be supported to develop and upskill, and what your compensation and benefits package could include.',
			style: {
				color: 'white',
				fontSize: '28px',
				fontWeight: '300',
				lineHeight: '32px',
			},
		},
		link: {
			type: 'customLink2',
			text: 'Discover life at ASML',
			url: '/careers/working-at-asml/life-at-asml',
			style: {
				color: 'transprent',
				fontSize: '20px',
				fontWeight: '500',
				backgroundColor: 'white',
			},
		},
	},
	teaserList: {
		style: {},
		content: {
			text: 'WORK AT ASML',
			style: {
				color: '#0f238c',
				fontSize: '16px',
				letterSpacing: '5px',
				lineHeight: '16px',
			},
		},
		title: {
			text: '60 locations, endless job opportunities',
			style: {
				color: '#555464',
				fontSize: '48px',
				fontWeight: '700',
				letterSpacing: '-2px',
				lineHeight: '48px',
				color: '#0f238c',
			},
		},
		teasers: [
			{
				link: { url: '/' },

				image: {
					style: {},
					url: 'https://www.asml.com/-/media/asml/images/careers/working-at-asml/teasers/netherlands.jpg?h=500&iar=0&mh=500&w=667&rev=1a79bd0d6bde4cf787a6572ef50875c5&hash=4E4B19854E20429FE6D988CBFD41C691',
				},
				title: { text: 'The Netherlands', style: { color: 'red' } },
				content: {
					style: {},
					text: 'ASML is headquartered in Veldhoven amid a thriving ecosystem of high-tech companies. Our headquarters is home to more than half of all our employees.',
				},
			},
			{
				link: { url: '/' },

				image: {
					style: {},
					url: 'https://www.asml.com/-/media/asml/images/careers/working-at-asml/teasers/46719-office-2019.jpg?h=500&iar=0&mh=500&w=591&rev=e459d4ced5ac4c188563846f2ead814d&hash=1187A2456BA18BB79AA88AD7E68A5C23',
				},
				title: { text: 'United States', style: {} },
				content: {
					style: {},
					text: 'With 14 customer support sites, two factories, and three R&D centers, our US locations service Intel and other customers and contribute to our holistic product portfolio.',
				},
			},
			{
				link: { url: '/' },

				image: {
					style: {},
					url: 'https://www.asml.com/-/media/asml/images/technology/cleanroom/47046-cleanroom-euv-wafer-stage-training-2019-taiwan.jpg?h=500&iar=0&mh=500&w=750&rev=b01c5c39ded9439081fd9ad69c55175a&hash=877CC5ABE1BD0F950503C781CCBB0525',
				},

				title: { text: 'Taiwan', style: {} },
				content: {
					style: {},
					text: 'We have the largest ASML manufacturing site in Asia as well as two training centers, play an essential role in the rapidly growing e-beam market, and work closely with TSMC and major semiconductor fabs.',
				},
			},
			{
				link: { url: '/' },

				image: {
					style: {},
					url: 'https://www.asml.com/-/media/asml/images/technology/cleanroom/47056-cleanroom-euv-wafer-stage-training-2019-korea.jpg?h=500&iar=0&mh=500&w=750&rev=b357101d3aa44b058fa4eccbff4e7d0d&hash=90FD4B964CFB91A9601296C4F7C79ABB',
				},
				title: { text: 'South Corea', style: {} },

				content: {
					style: {},
					text: 'Our teams in South Korea work closely with Samsung and other customers and have five locations that include a global distribution center and a training center.',
				},
			},
			{
				link: { url: '/' },

				image: {
					style: {},
					url: 'https://www.asml.com/-/media/asml/images/careers/working-at-asml/teasers/asml_office_awb_6h4_april2019_rgb03682_4x3.jpg?h=500&iar=0&mh=500&w=667&rev=b4b2455e8f1d4a8bbc2738ffdce8d388&hash=95EA6D4238E3BE4892590E6ACCE48CB0',
				},
				title: { text: 'China', style: {} },

				content: {
					style: {},
					text: 'We support both global big-name customers and fast-growing local customers with 12 customer support sites, two R&D centers, and one training center.',
				},
			},
			{
				link: { url: '/' },
				image: {
					style: {},
					url: 'https://www.asml.com/-/media/asml/images/technology/cleanroom/47052-cleanroom.jpg?h=500&iar=0&mh=500&w=889&rev=cc3b210495fe4d13b95d870412ee96f0&hash=F5E79242D9C00A3A6586111731BB8910',
				},
				title: { text: 'Japan', style: {} },
				content: {
					style: {},
					text: 'Japan is home to tech giants and major semiconductor players, with whom ASML collaborates closely. You can help to advance technology – and your career.',
				},
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
				link: '/',
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
				link: '/',
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
				link: '/',
			},
		],
	},
};
