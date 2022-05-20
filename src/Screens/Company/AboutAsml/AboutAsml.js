import React from 'react';
import './AboutAsml.css';
import Hotspots from '../../../Components/Hotspots/Hotspots';
import Accordion from '../../../Components/Accordion/Accordion';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import Figures from '../../../Components/Figures/Figures';
import RelatedContent from '../../../Components/RelatedContent/RelatedContent';
import Cards from '../../../Components/Cards/Cards';
import TextImage from '../../../Components/TextImage/TextImage';
import CenteredText from '../../../Components/CenteredText/CenteredText';

function AboutAsml() {
	return (
		<section id="aboutAsml" className="aboutAsml">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>
			<div>
				<CenteredText data={data?.centeredText1} />
			</div>
			<div>
				<TextImage data={data?.textImage1} />
			</div>
			<div>
				<Hotspots data={data?.hotspots} />
			</div>

			<div>
				<Figures data={data?.figures} />
			</div>
			<div>
				<Accordion data={data?.accordion} />
			</div>
			<div>
				<TextImage data={data?.textImage2} />
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

export default AboutAsml;

const data = {
	heroHeader: {
		title: {
			text: 'About ASML',
			style: { color: 'white' },
		},
		content: {
			text: 'Unlocking the potential of semiconductor technology',
			style: { color: 'white' },
		},
		style: {
			background:
				'url(https://www.asml.com/-/media/asml/images/company/about-asml/43681-inside-nxe-3400.png?mw=1920&rev=35c472807d824e3ab3b2b07c0db1c406&hash=3CB21860F4909FAFA9FB3E0D206BD24E)',
			height: '740px',
		},
	},
	centeredText1: {
		style: { background: '#EFF2F4' },
		content: {
			text: 'ASML is an innovation leader in the semiconductor industry. We provide chipmakers with everything they need – hardware, software and services – to mass produce patterns on silicon through lithography.',
			style: {
				fontSize: '36px',
				fontWeight: '300',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: '#0F238C',
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
			text: 'Vision & mission',
			style: {
				color: '#0F238C',
				fontSize: '48px',
				fontWeight: '700',
				lineHeight: '36px',
				letterSpacing: '-1px',
			},
		},
		content: {
			text: [
				"We enable groundbreaking technology to solve some of society's toughest challenges. Together with our partners, we provide leading patterning solutions that drive the advancement of microchips.",
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/company/about-asml/vision-and-mission/0001-aerial-cityscape.jpg?mw=1200&rev=b922f8e55a134b61bd9ad5aef5ab9b0a&hash=CF46F8F5560C631CB7A9B5AA81D79071',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
		link: {
			type: 'customLink1',
			url: '/',
			text: 'More about our vision and mission',
			style: {
				width: 'fit-content',
				color: '#0F238C',
				fontWeight: '500',
				fontSize: '20px',
			},
		},
	},
	hotspots: [
		{
			id: 1,
			title: 'Hillsboro, OR, US',
			style: { top: '29.27%', left: '13.35%' },
			modalData: {
				title: 'Hillsboro, OR, US',
				text: 'Our largest US customer support site, responsible for delivering the highest level of service throughout the life cycle of a lithography system. It’s also the main training hub for customer support engineers in the US.',
				btn: { text: 'Explore Hillsboro', link: '/' },

				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/hillsboro.jpg?mw=1920&rev=4b7b8357dd154bda9c90cf1460e67d80&hash=3C60E8FA2C66F7BA232D741A4F62096A',
			},
		},
		{
			id: 2,
			title: 'Silicon Valley, CA, US',
			style: { top: '42%', left: '7.28%' },
			modalData: {
				title: 'Silicon Valley, CA, US',
				text: 'Our software and R&D powerhouse, specializing in computational applications to help chipmakers achieve higher manufacturing yields, as well as in e-beam metrology technology.',
				btn: { text: 'Explore Silicon Valley', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/silicon-valley.jpg?mw=1920&rev=37bc4e6890934b8cb8893553b359ccc4&hash=AD4F82F8568F261743EF974F98F7A0E1',
			},
		},
		{
			id: 3,
			title: 'San Diego, CA, US',
			style: { top: '50.21%', left: '11%' },
			modalData: {
				title: 'San Diego, CA, US',
				text: "The epicenter for the development and manufacturing of DUV and EUV light sources for lithography systems. It's also the main office of Cymer, an independently operated business within ASML.",
				btn: { text: 'Explore San Diego', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/san-diego.jpg?mw=1920&rev=a02b736e9436468fbdc1fadafaf8eebe&hash=1BDB904B6F8D78523D2C4C6BD4B0D268',
			},
		},
		{
			id: 4,
			title: 'Chandler, AZ, US',
			style: { top: '43.06%', left: '22.1%' },
			modalData: {
				title: 'Chandler, AZ, US',
				text: 'Home to our US Global Support Center for customers, our Chandler office houses employees from Customer Support, Sales, and other support departments.',
				btn: { text: 'Explore Chandler', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/chandler.jpg?mw=1920&rev=b377194cf043480da2f363d8ebd18967&hash=C30C4B6F4A4B1BF5451C94CF3D042A93',
			},
		},
		{
			id: 5,
			title: 'Wilton, CT, Us',
			style: { top: '35.44%', left: '23.7%' },
			modalData: {
				title: 'Wilton, CT, US',
				text: 'Our largest US office and second-largest R&D center in ASML, with expertise in mechatronics, alignment and sensor technology and world-class optical R&D and manufacturing abilities.',
				btn: { text: 'Explore Wilton', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/wilson.jpeg?mw=1920&rev=a16a61eb503d44c99602b1d70bf5826e&hash=18DC514A7A7DDAFA93B7EBC8EDE9C511',
			},
		},
		{
			id: 6,
			title: 'Veldhoven, the Netherlands',
			style: { top: '26.59%', left: '40.2%' },
			modalData: {
				title: 'Veldhoven, the Netherlands',
				text: 'Our global headquarters is our biggest R&D and manufacturing site. It houses our European ASML Global Support Center, the Board of Management, and global corporate functions such as Legal and Investor Relations.',
				btn: { text: 'Explore Veldhoven', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/company/about-asml/locations/veldhoven/45634-asml-campus-overview.jpg?mw=1920&rev=1a462d131ef745f48302e2d83d88b2b1&hash=23EB57A9EC7926F6C6D471E08C51527C',
			},
		},
		{
			id: 7,
			title: 'Berlin, Germany',
			style: { top: '31.96%', left: '54.7%' },
			modalData: {
				title: 'Berlin, Germany',
				text: 'A major R&D and manufacturing site with expertise in optics and wafer chuck technology. Produces key lithography components, including wafer tables and clamps, reticle chucks and mirror blocks.',
				btn: { text: 'Explore Berlin', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/berlin.jpg?mw=1920&rev=515136cabbed4a76b481c6e30c1955d8&hash=58684BE0A4D9EFB3BD99FD0896ADDB0E',
			},
		},
		{
			id: 8,
			title: 'Hwasung, South Corea',
			style: { top: '29.41%', left: '76.6%' },
			modalData: {
				title: 'Hwasung, South Korea',
				text: 'Our headquarters in South Korea houses the ASML Korea Training Center for our customer support engineers supporting high-volume production at customer sites. It’s also home to the Korea Repair Center for system parts.',
				btn: { text: 'See jobs in Hwasung', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/hwasung.jpg?mw=1920&rev=d8b05e0600df48afa05583345500ab26&hash=B56E9B32DAC1769EE8EF5C03A150B5F9',
			},
		},
		{
			id: 9,
			title: 'Beijing, China',
			style: { top: '34.2%', left: '70.8%' },
			modalData: {
				title: 'Beijing, China',
				text: 'Our research and manufacturing center for a range of modules for our e-beam inspection systems, as well as home to customer support for local chipmakers.',
				btn: { text: 'See jobs in Beijing', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/beijing.jpg?mw=1920&rev=2a4e80c18d7049269dde1ec7c21c1921&hash=BE6D73446617064437E2733157D6FADD',
			},
		},
		{
			id: 10,
			title: 'Shenzhen, China',
			style: { top: '42.3%', left: '72.2%' },
			modalData: {
				title: 'Shenzhen, China',
				text: 'The biggest ASML R&D center for software in Asia, working on a range of products and solutions, from process analyses, mathematical modeling, cloud computing, machine learning and big data.',
				btn: { text: 'See jobs in Shenzhen', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/shenzhen.jpg?mw=1920&rev=c3cf1714811844fcbcad7bcd8a80f52a&hash=80E2F3F4258D43DE166EA0025030E47C',
			},
		},
		{
			id: 11,
			title: 'Hong Kong, China',
			style: { top: '48.8%', left: '71%' },
			modalData: {
				title: 'Hong Kong, China',
				text: 'Our regional headquarters with strategic responsibilities for managing our current operations in Asia.',
				btn: { text: 'See jobs in Hong Kong', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/hong-kong.jpg?mw=1920&rev=d3d5d4fc4f7c457b98a0e9d3c9b782cb&hash=9E379BAB7824A5B7436A53029E1F76AC',
			},
		},
		{
			id: 12,
			title: 'Hsinchu, Taiwan',
			style: { top: '56.4%', left: '74.3%' },
			modalData: {
				title: 'Hsinchu, Taiwan',
				text: 'Our Taiwanese headquarters, based in the Hsinchu Science Park, is home to local corporate functions as well as customer support and software development.',
				btn: { text: 'See jobs in Hsinchu', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/hsinchu.jpg?mw=1920&rev=69172c09d2b64c23a4617208df33c8a8&hash=A8FA4380642563BFA928CC810E58AEF9',
			},
		},

		{
			id: 13,
			title: 'Linkou, Taiwan',
			style: { top: '60.83%', left: '78.2%' },
			modalData: {
				title: 'Linkou, Taiwan',
				text: "Our largest site in Asia, where we build reticle handlers for our lithography systems and YieldStar metrology systems, as well as refurbish mature systems. It's also home to our Asian Global Support Center for customers.",
				btn: { text: 'See jobs in Linkou', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/linkou.jpg?mw=1920&rev=590c48a45a824ec0bfd4ffc30d974cf0&hash=A1650C5941CC07DF83F136DBB78225DC',
			},
		},
		{
			id: 14,
			title: 'Tainan, Taiwan',
			style: { top: '56.07%', left: '81.35%' },
			modalData: {
				title: 'Tainan, Taiwan',
				text: 'Our main e-beam technology site, focused on R&D as well as the production of our e-beam inspection systems and solutions.',
				btn: { text: 'See jobs in Tainan', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/tainan.jpg?mw=1920&rev=eec97af550104235bd6a4537a9c89861&hash=F7B8C39B12655094D1A1604D654C0790',
			},
		},
		{
			id: 15,
			title: 'Shanghai, China',
			style: { top: '49.36%', left: '83.3%' },
			modalData: {
				title: 'Shanghai, China',
				text: 'Our Chinese headquarters, housing customer support services and logistics, as well as corporate functions for our operations in China. It’s also home to an R&D team focused on software development.',
				btn: { text: 'See jobs in Shanghai', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/shanghai.jpg?mw=1920&rev=f1abdc020c7248c096ab76144fa85908&hash=7B1A9DA9D8804E954DB6F8FBC83BE336',
			},
		},
		{
			id: 16,
			title: 'Tokyo, Japan',
			style: { top: '42.6%', left: '87.67%' },
			modalData: {
				title: 'Tokyo, Japan',
				text: 'Our Japanese headquarters, housing software development as well as customer support, logistics and local corporate functions.',
				btn: { text: 'See jobs in Japan', link: '/' },
				image:
					'https://www.asml.com/-/media/asml/images/global/hotspot/locations/tokyo.jpg?mw=1920&rev=4efa9d9aefb644129edfc54ab720345d&hash=D6731FA973D9702EF4FB7A4EB0F9FF5F',
			},
		},
	],

	figures: {
		style: {},
		title: {
			text: 'Facts & figures',
			style: {
				color: '#0F238C',
				fontSize: '48px',
				fontWeight: '700',
				lineHeight: '48px',
				letterSpacing: '-1px',
				paddingBottom: '40px',
			},
		},
	},
	textImage2: {
		style: { backgroundColor: 'white' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: '2021 Annual Report',
			style: {
				color: '#0F238C',
				fontSize: '48px',
				fontWeight: '700',
				lineHeight: '36px',
				letterSpacing: '-1px',
			},
		},
		content: {
			text: [
				'Take a tour of the highlights to find out more about our performance and achievements, or download the full report.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/investors/financial-results/annual-report/2020/asml_drone_veldhoven_april2019_rgb0083.jpg?mw=1200&rev=ee76448f4764420c854cba0d9f7b4595&hash=56574EA2DA6D7A92AF9E3B476B83B0D5',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
		link: {
			type: 'customLink2',
			url: '/',
			text: '2021 Annual Report',
			style: {
				width: 'fit-content',
				color: 'white',
				fontWeight: '500',
				fontSize: '20px',
				backgroundColor: 'blue',
			},
		},
	},
	cards: {
		style: { backgroundColor: '#EFF2F4' },
		title: {
			style: {
				color: '#0f238c',
				fontSize: '48px',
				fontWeight: '700',
			},
			text: 'More about ASML',
		},
		cards: [
			{
				title: { text: 'History ', style: { color: '#0f238c' } },
				content: {
					text: 'From a leaky wooden shed to a global force, ASML recently marked 35 years of ingenuity and perseverance.',
					style: { color: '#2b2a3e' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/cleanroom/47061-cleanroom-euv-wafer-stage-training.jpg?mw=525&rev=6db825d43c374982b60743f03cfe8cf3&hash=6C529088DFFE46DD7BA2A52C9B380C5D',
				},
				link: { url: '/company/about-asml' },
			},
			{
				title: { text: 'Organization', style: { color: '#0f238c' } },
				content: {
					text: 'R&D, manufacturing and customer support are the pillars of ASML’s organizational structure, supported by our corporate functions.',
					style: { color: '#2b2a3e' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/cleanroom/47061-cleanroom-euv-wafer-stage-training.jpg?mw=525&rev=6db825d43c374982b60743f03cfe8cf3&hash=6C529088DFFE46DD7BA2A52C9B380C5D',
					style: { color: '#2b2a3e' },
				},
				link: { url: '/company/governance' },
			},
			{
				title: { text: 'How we innovate', style: { color: '#0f238c' } },
				content: {
					text: 'Innovation is never a straight line. But we know that even the biggest challenge can be overcome by chipping away at it.',
					style: { color: '#2b2a3e' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/how-we-innovate/47079-asml-lab-h2-april-2019.jpg?mw=525&rev=15d2e78c64e244afab37d152beed8916&hash=D75135E493B1A244257292FC42D7926D',
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Products ', style: { color: '#0f238c' } },
				content: {
					text: 'We provide our customers with everything they need – hardware, software and services – to mass produce patterns on silicon.',
					style: { color: '#2b2a3e' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/cleanroom/46989-cleanroom-assembly.jpg?mw=525&rev=5d534dd310154165a9eba82627fc2101&hash=29A9BBC299FE6C08BAD63D868D117927',
				},
				link: { url: '/' },
			},
		],
	},

	accordion: {
		header: 'Frequently asked questions about ASML',
		items: [
			{
				id: 1,
				title: { text: 'What is ASML?' },
				content: {
					text: 'ASML is one of the world’s leading manufacturers of chip-making equipment. It’s a common misconception that we make chips, also called microchips or integrated circuits (ICs), but we actually design and manufacture the lithography machines that are an essential component in chip manufacturing. Our customers are companies such as Intel, who use our machines in ‘fabs’ – microchip manufacturing plants – to create microchips that are eventually used in many electronic devices, including smartphones, laptops and much more.',
				},
			},
			{
				id: 2,
				title: { text: 'What does ASML stand for?' },
				content: {
					text: 'ASML isn’t an abbreviation of anything anymore, though it does have its roots as one. In 1984, when ASML was founded as a joint venture between Philips and ASM International, the name ‘Advanced Semiconductor Materials Lithography’ was chosen and used as ‘ASM Lithography’ to reflect the partners in the joint venture. Over time, this name has become simply ‘ASML’.',
				},
			},
			{
				id: 3,
				title: { text: 'How many employees does ASML have?' },
				content: {
					text: 'There are more than 32,000 ASML employees on payroll and flexible contracts, spread across offices in more than 60 locations worldwide. The company’s headquarters, located in Veldhoven, the Netherlands, comprises over half of all employees – more than 16,800 people work there.',
				},
			},
		],
	},
	centeredText2: {
		style: { background: 'linear-gradient(45deg,#00bfb3,#43b02a 100%)' },
		title: {
			text: "Let's get in touch",
			style: { color: 'white', fontSize: '48px', fontWeight: '700' },
		},
		content: {
			text: "Contact us via the contact form and we'll get back to you as soon as possible",
			style: {
				fontSize: '28px',
				fontWeight: '300',
				lineHeight: '32px',
				color: 'white',
			},
		},
		link: {
			type: 'customLink1',
			url: '/',
			text: 'Contact us',
			style: { fontSize: '20px', fontWeight: '500', color: '#0F238C' },
		},
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
					url: 'https://www.asml.com/-/media/asml/images/technology/39622-precision.jpg?mw=525&rev=b72e62912b9e4e90a84d1a6cda951dd4&hash=5CAEE9308B9CB34EEED0A663BA8E3D6C',
				},
				title: { text: 'ASML at a glance', style: { color: 'white' } },
				content: {
					text: 'With 32,000 people and counting at over 60 locations worldwide, we are a growing global force in the semiconductor industry.',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/47006-cleanroom-assembly.jpg?mw=525&rev=fd75ffe7b03d486db36b1be249a00f5c&hash=6FD6AB8586D1D564DC7C5D9E08B78025',
				},
				title: { text: 'ASML at a glance', style: { color: 'white' } },
				content: {
					text: 'Learn about the technology behind our lithography, metrology and inspection, and software solutions.',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/01-hero-images/careers.jpg?mw=525&rev=2365b9f206b5489d939222836ec7c27b&hash=CC784D45BB73CA988244E08768CA6C02',
				},
				title: { text: 'Carrers', style: { color: 'white' } },
				content: {
					text: 'Explore careers at ASML and join the high-tech semiconductor industry, where you can work on technology that can change the world.',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
		],
	},
};
