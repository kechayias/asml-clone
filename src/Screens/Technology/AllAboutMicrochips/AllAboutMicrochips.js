import React from 'react';
import Cards from '../../../Components/Cards/Cards';
import CenteredText from '../../../Components/CenteredText/CenteredText';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import RelatedContent from '../../../Components/RelatedContent/RelatedContent';
import './AllAboutMicrochips.css';
function AllAboutMicrochips() {
	return (
		<section id="allAboutMicrochips" className="allAboutMicrochips__container">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>
			<div>
				<CenteredText data={data?.centeredText} />
			</div>
			<div>
				<Cards data={data?.cards} />
			</div>
			<div>
				<RelatedContent data={data?.relatedContent} />
			</div>
		</section>
	);
}

export default AllAboutMicrochips;
const data = {
	heroHeader: {
		title: {
			text: 'All about microchips',
			style: { color: 'white' },
		},
		content: {
			text: 'Microchips may be small, but their impact on the world is tremendous',
			style: { color: 'white' },
		},
		style: {
			background:
				'linear-gradient(to right,rgba(47, 48, 70, 1) -30%,rgba(41, 100, 100, 0) 120%),url(https://www.asml.com/-/media/asml/images/technology/about-our-technology/wafer-closeup-duv-lens.jpg?mw=1920&rev=ddf4df8a19a043a5bc0a35a42c5cdff9&hash=D5EC3403FFEA82AB1A821DDC35D3803B)',
			height: '740px',
		},
	},
	centeredText: {
		style: { backgroundColor: 'white' },
		content: {
			text: 'Find out everything you need to know about how microchips are designed and mass produced for the semiconductor industry.',
			style: {
				fontSize: '36px',
				fontWeight: '300',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: '#0F238C',
			},
		},
	},
	cards: {
		style: { backgroundColor: 'white' },
		cards: [
			{
				title: {
					text: 'The basics',
					style: { color: '#0f238c' },
				},
				content: {
					text: 'Get the facts about microchips – the foundations of our digital world.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/about-our-technology/close-up-of-wafer-alternative.jpg?mw=525&rev=766d528b6b4f40b9abafee31d33770bd&hash=E6D08EA215C377786D2CF43071FB2507',
				},
				link: { url: '/' },
			},
			{
				title: { text: 'How microchips are made', style: { color: '#0f238c' } },
				content: {
					text: 'Follow a microchip’s journey from a semiconductor fab to your phone.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/about-our-technology/asml-employees-working-in-a-cleanroom.jpg?mw=525&rev=cdb956eecd634373adb2762000539964&hash=A597ABEF56D37AB766D8D2B5931E2402',
				},
				link: { url: '/' },
			},
			{
				title: { text: "Moore's Law", style: { color: '#0f238c' } },
				content: {
					text: 'Learn about the prediction that’s been driving the semiconductor industry since 1965.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/about-our-technology/wafers-in-foup-with-asymmetry.jpg?mw=525&rev=afb9ff82ace2496c810e52050c757b5e&hash=DAF160CBF901C4632656835696272BFD',
				},
				link: { url: '/' },
			},
		],
	},
	relatedContent: {
		style: { backgroundColor: '#0F238C' },
		title: {
			text: 'Related Content',
			style: {
				color: 'white',
				fontSize: '56px',
				fontWeight: '300',
				lineHeight: '56px',
			},
		},
		cards: [
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/software/lines-of-code.jpg?mw=525&rev=b6c8a66382ef47a2b1e361989c7b4d45&hash=F70B58E93B666C825FB6D0AC60069543',
				},
				title: { text: 'Software', style: { color: 'white' } },
				content: {
					text: 'ASML has one of the world’s largest and most pioneering software communities.',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/01-hero-images/careers.jpg?mw=525&rev=2365b9f206b5489d939222836ec7c27b&hash=CC784D45BB73CA988244E08768CA6C02',
				},
				title: {
					text: 'Careers',
					style: { color: 'white' },
				},
				content: {
					text: 'Explore careers at ASML and join the high-tech semiconductor industry, where you can work on technology that can change the world.',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
		],
	},
};
