import React from 'react';
import './Technology.css';

import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import CenteredText from '../../../Components/CenteredText/CenteredText';
import TextImage from '../../../Components/TextImage/TextImage';
import RelatedArticles from '../../../Components/RelatedArticles/RelatedArticles';
function Technology() {
	return (
		<section id="technology" className="technology__container">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>
			<div>
				<CenteredText data={data?.centeredText} />
			</div>
			<div>
				<TextImage data={data?.textImage1} />
			</div>
			<div>
				<TextImage data={data?.textImage3} />
			</div>
			<div>
				<RelatedArticles data={data?.relatedArticles} />
			</div>
		</section>
	);
}

export default Technology;
const data = {
	heroHeader: {
		title: {
			text: 'Our technology',
			style: { color: 'white' },
		},
		content: {
			text: 'Lithography – using light to print tiny patterns on silicon – is a fundamental step in mass producing microchips',
			style: { color: 'white' },
		},
		style: {
			background:
				'url(https://www.asml.com/-/media/asml/images/technology/cleanroom/47006-cleanroom-assembly.jpg?mw=1920&rev=2fa9f357a049417687773ce4b5a11473&hash=9870369D0F0FABD839C575AD905B3E95)',
			height: '740px',
		},
	},
	centeredText: {
		style: {
			backgroundColor: '#EFF2F4',
		},
		content: {
			text: 'An innovation leader in the semiconductor industry, ASML’s lithography solutions have been making giant leaps on this tiny scale since 1984. In our technology, hardware meets software to provide a holistic approach to mass producing patterns on silicon.',
			style: {
				fontSize: '36px',
				fontWeight: '300',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: '#0F238C',
				padding: '100px 0px',
			},
		},
	},
	textImage1: {
		style: { backgroundColor: 'white' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: 'All about chips',
			style: {
				color: '#0F238C',
				fontSize: '36px',
				fontWeight: '500',
				lineHeight: '36px',
				letterSpacing: '-1px',
			},
		},
		content: {
			text: [
				'Microchips go by many names: integrated circuits, semiconductor chips, computer chips or, most simply, chips. Whatever you call them, these tiny pieces of silicon are the foundation of the digital world. They make our smartphones, cars, medical equipment and so many other now-common devices possible – and the tinier they get, the more advanced technology we realize in the everyday world. They may be small, but their impact is tremendous.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/technology/about-our-technology/wafer-closeup-duv-lens.jpg?mw=1200&rev=ddf4df8a19a043a5bc0a35a42c5cdff9&hash=10541D3531216FB77A2E459168332212',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},

	textImage3: {
		style: { backgroundColor: 'white' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: 'Software',
			style: {
				color: '#0F238C',
				fontSize: '36px',
				fontWeight: '500',
				lineHeight: '36px',
				letterSpacing: '-1px',
			},
		},
		content: {
			text: [
				'If our hardware innovations are Batman, then software is its Robin. Even though you might know of ASML as a hardware company, we actually have one of the world’s largest and most pioneering software communities. It would be impossible for our lithography systems to manufacture chips at such increasingly small dimensions without the software we develop. As a result, our lithography systems are now a hybrid of high-tech hardware and advanced software. Our development teams work across a range of coding practices, providing innovative solutions to the intricate problems that affect the chipmaking systems at the heart of the electronics industry.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/technology/software/lines-of-code.jpg?mw=1200&rev=b6c8a66382ef47a2b1e361989c7b4d45&hash=A8C229872B89F143BBB5C1BFF465FE54',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},
	relatedArticles: {
		style: { backgroundColor: '#0f238c' },
		title: {
			text: 'Related stories',
			style: { color: 'white', fontWeight: '300', fontSize: '56px' },
		},
		articles: [
			{
				date: {
					text: 'April 1, 2022',
					style: {
						color: '#5563ad',
						backgroundColor: 'white',
						fontSize: '14px',
					},
				},
				title: {
					text: 'Update on the 2022 Annual General Meeting of ASML Holding N.V.',
					style: {
						color: '#0F238C',
						backgroundColor: 'white',
						fontSize: '20px',
						fontWeight: '500',
					},
				},
				image:
					'https://www.asml.com/-/media/asml/images/news/stories/2020/asml-wins-semi-americas-award/asml-wins-semi-americas-award-for-euv.jpg?mw=525&rev=565c942809d14edfafb028bfed228acc&hash=FE4026A1453CD8EE62283584F0EF6554',
				link: '/',
			},
			{
				date: {
					text: 'March 15, 2022',
					style: {
						color: '#5563ad',
						backgroundColor: 'white',
						fontSize: '14px',
					},
				},
				title: {
					text: 'ASML publishes agenda Annual General Meeting 2022',
					style: {
						color: '#0F238C',
						backgroundColor: 'white',
						fontSize: '20px',
						fontWeight: '500',
					},
				},
				image:
					'https://www.asml.com/-/media/asml/images/news/stories/2020/high-tech-manufacturing/asml_stories_manufactering_article.png?mw=525&rev=68e86192a5ec4ac4bc6a42e0b01453d6&hash=00258B283E4B32711D9D0706202421DE',
				link: '/',
			},
			{
				date: {
					text: 'February 9, 2022',
					style: {
						color: '#5563ad',
						backgroundColor: 'white',
						fontSize: '14px',
					},
				},
				title: {
					text: 'ASML publishes 2021 Annual Reports',
					style: {
						color: '#0F238C',
						backgroundColor: 'white',
						fontSize: '20px',
						fontWeight: '500',
					},
				},
				image:
					'https://www.asml.com/-/media/asml/images/news/stories/2020/asml-fellows---giving-technical-experts-the-recognition-they-deserve/asml-technology-conference-2018---patrick-tinnemans-1.jpg?mw=525&rev=ecc430e4e80f41b2b3d6222f09e61dbb&hash=E39ED6AC6F22F395446E9FDEECA6C502',
				link: '/',
			},
		],
	},
};
