import React from 'react';
import './Company.css';
import CenteredText from '../../../Components/CenteredText/CenteredText';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import RelatedContent from '../../../Components/RelatedContent/RelatedContent';
import Cards from '../../../Components/Cards/Cards';
import RelatedArticles from '../../../Components/RelatedArticles/RelatedArticles';
function Company() {
	return (
		<section id="company" className="company">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>
			<div>
				<CenteredText data={data?.centeredText} />
			</div>
			<div>
				<Cards data={data?.cards1} />
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

export default Company;
const data = {
	heroHeader: {
		title: {
			text: 'Inside a semiconductor industry leader',
			style: { color: 'white' },
		},
		content: {
			text: 'Find out more about ASML and link to information on our technology, products, and how we operate',
			style: { color: 'white' },
		},
		style: {
			background:
				'linear-gradient(to right,rgba(47, 48, 70, 1) -30%,rgba(41, 100, 100, 0) 120%),url(https://www.asml.com/-/media/asml/images/company/47129-aerial-company-section.jpg?mw=1920&rev=6e122b0bf91b492bae48f31f4657d732&hash=606E197D62411447E90EE0F8E9D88600)',
			height: '740px',
		},
	},
	centeredText: {
		style: {},
		content: {
			text: 'We provide chipmakers with everything they need – hardware, software and services – to mass produce patterns on silicon through lithography.',
			style: {
				fontSize: '48px',
				fontWeight: '300',
				lineHeight: '48px',
				letterSpacing: '-1px',
				color: '#0F238C',
			},
		},
	},
	cards1: {
		style: { backgroundColor: 'white' },
		cards: [
			{
				title: { text: 'About ASML', style: { color: '#0f238c' } },
				content: {
					text: 'ASML is an innovation leader in the semiconductor industry. Find out what we do and why we do it.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/about-asml/43681-inside-nxe-3400.png?mw=525&rev=35c472807d824e3ab3b2b07c0db1c406&hash=8DCA2E2B88C96D5664FF6DF306977714',
				},
				link: { url: '/company/about-asml' },
			},
			{
				title: { text: 'Governance', style: { color: '#0f238c' } },
				content: {
					text: 'We’re committed to independence, accountability and transparency, building a relationship of trust with our stakeholders.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/governance/governance.jpg?mw=525&rev=aebb9276749f49e2a794333526b5ebc8&hash=F97A57C2BD2A4BEE80F7F5EE48E48C32',
				},
				link: { url: '/company/governance' },
			},
			{
				title: { text: 'Sustainability', style: { color: '#0f238c' } },
				content: {
					text: 'Find out more about how we’re shaping our sustainable future and contributing to the United Nation’s Sustainable Development Goals.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/sustainability/42578-sustainability.jpg?mw=525&rev=6b0056d41c2b4261b79cdc92611eba53&hash=1F601D55DCD59F7F2F803C906DB7995A',
				},
				link: { url: '/' },
			},
			{
				title: { text: 'ASML Foundation', style: { color: '#0f238c' } },
				content: {
					text: 'Learn more about how we improve lives through inclusive and quality education and training.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/asml-foundation/cini-india.jpg?mw=525&rev=1c5bc94347c849e9a48353d77ccaccfa&hash=B5F1164FC3A32862FABC24AB7F522809',
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
				letterSpacing: '-2px',
				lineHeight: '56px',
			},
		},
		cards: [
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/cleanroom/47006-cleanroom-assembly.jpg?mw=525&rev=2fa9f357a049417687773ce4b5a11473&hash=961CF67D4BC8D88B933705D9994415EB',
				},
				title: { text: 'Technology', style: { color: '#0F238C' } },
				content: {
					text: 'Learn about the technology behind our lithography, metrology and inspection, and software solutions.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/cleanroom/46989-cleanroom-assembly.jpg?mw=525&rev=5d534dd310154165a9eba82627fc2101&hash=29A9BBC299FE6C08BAD63D868D117927',
				},
				title: { text: 'Products', style: { color: '#0F238C' } },
				content: {
					text: 'Find out how we provide our customers with the hardware, software and services they need to mass produce patterns on silicon.',
					style: { color: '#555464' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/01-hero-images/careers.jpg?mw=525&rev=2365b9f206b5489d939222836ec7c27b&hash=CC784D45BB73CA988244E08768CA6C02',
				},
				title: { text: 'Carrers', style: { color: '#0F238C' } },
				content: {
					text: 'Explore careers at ASML and join the high-tech semiconductor industry, where you can work on technology that can change the world.',
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
