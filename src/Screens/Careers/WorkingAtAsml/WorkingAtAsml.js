import React from 'react';
import './WorkingAtAsml.css';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import CenteredText from '../../../Components/CenteredText/CenteredText';
import TextImage from '../../../Components/TextImage/TextImage';
import TeaserList from '../../../Components/TeaserList/TeaserList';
import RelatedContent from '../../../Components/RelatedContent/RelatedContent';
import Cards from '../../../Components/Cards/Cards';
function WorkingAtAsml() {
	return (
		<section id="allAboutMicrochips" className="allAboutMicrochips__container">
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
				<TextImage data={data?.textImage2} />
			</div>
			<div>
				<TextImage data={data?.textImage3} />
			</div>
			<div>
				<CenteredText data={data?.centeredText2} />
			</div>
			<div>
				<Cards data={data?.cards1} />
			</div>
			<div>
				<Cards data={data?.cards2} />
			</div>
			<div>
				<TextImage data={data?.textImage4} />
			</div>
			<div>
				<TeaserList data={data?.teaserList} />
			</div>
			<div>
				<RelatedContent data={data?.relatedContent} />
			</div>
		</section>
	);
}

export default WorkingAtAsml;
const data = {
	heroHeader: {
		title: {
			text: 'Working at ASML',
			style: { color: 'white' },
		},
		content: {
			text: 'Be part of progress. Join a dynamic, global collaboration pushing semiconductor technology to new limits to improve the way we live, work and play',
			style: { color: 'white' },
		},
		style: {
			background:
				'linear-gradient(to right,rgba(47, 48, 70, 1) -30%,rgba(41, 100, 100, 0) 120%),url(https://www.asml.com/-/media/asml/images/careers/working-at-asml/working-at-asml.jpg?mw=1920&rev=5fced0cedfb4452fa6dbb4ae5aa0aee9&hash=B1FD7C4E36AC5A25F2B4B9634D1E71B1)',
			height: '1020px',
		},
	},
	centeredText1: {
		content: {
			text: 'What’s it like working at a semiconductor industry leader?',
			style: {
				fontSize: '48px',
				fontWeight: '300',
				lineHeight: '48px',
				letterSpacing: '-1px',
				color: '#0F238C',
			},
		},
	},
	textImage1: {
		style: { backgroundColor: '#C0E1F4' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: 'Challenging work that is changing the world',
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
				'Working at the cutting edge of tech, you’ll always have new challenges and new problems to solve. Our industry ecosystem is constantly evolving and innovating, and you will too. But the work isn’t just challenging and exciting, it’s rewarding. Your contributions will profoundly impact society, because – from smartphones to automotive tech – if it’s moving the world forward, we’re behind it.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/careers/working-at-asml/life-at-asml/asml_bpop_eu_header_saeedeh.jpg?mw=1200&rev=8d741762924d4c21b600a0531b443002&hash=2FAE97ED748D5343C31005A2D27E287B',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},
	textImage2: {
		style: { backgroundColor: '#C0E1F4' },

		title: {
			text: 'Collaboration is the key',
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
				"Working together is the only way to solve the complex, intriguing problems you and your team will face daily. So you won’t work in a silo. Instead, you'll thrive in a creative, dynamic work environment where you’ll collaborate with supportive colleagues.",
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/careers/working-at-asml/collaboration.jpg?mw=1200&rev=0dc0901a3b8e4e73a68c9be48f22d95d&hash=EBD6979477BEA182CE412C21C36E9D27',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},
	textImage3: {
		style: { backgroundColor: '#C0E1F4' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: 'Care and respect for all',
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
				'We are proud to say that ASML is an environment of mutual respect, where people feel valued – an environment that leads to better results than any of us could achieve alone. You will have the flexibility and trust to choose how best to tackle tasks and solve problems. And, because we champion a diverse and inclusive workforce, there is always space for creative and unique points of view.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/careers/working-at-asml/two-women-at-asml-office.jpg?mw=1200&rev=19ec4655851341d7be9213e2c924c9b3&hash=DF579D1A8B5D5915D4757896E7306028',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},
	centeredText2: {
		style: {},
		title: {
			text: 'Want to explore what it’s like to be on our team?',
			style: {
				fontSize: '36px',
				fontWeight: '500',
				lineHeight: '48px',
				letterSpacing: '-1px',
				color: '#0F238C',
			},
		},
		content: {
			text: 'If you are wondering what our work culture is like, look no further. Whether you will be based in the US, Europe or Asia, we’ve created an interactive section for you to discover what it’s like to be an ASML employee. You’ll hear from our employees, discover what your work-life balance could look like and how we support your well-being, learn about our networks and clubs, find out how our people are supported to develop and upskill, and what your compensation and benefits package could be.',
			style: {
				fontSize: '20px',
				fontWeight: '300',
				lineHeight: '32px',
				letterSpacing: '-1px',
				color: '#2b2a3e',
			},
		},
		link: {
			text: 'Show me life at ASML',
			url: '/',
			style: { color: '#1297e4' },
		},
	},
	cards1: {
		style: { backgroundColor: 'white' },
		cards: [
			{
				title: { text: 'Well-being', style: { color: '#0f238c' } },
				content: {
					text: 'It’s important to us that you stay healthy, happy and energetic – and make the most of your career at ASML. Through this program, we will support you to foster your own well-being and positive work-life balance through courses, great working environments, flexibility and more.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/working-at-asml/life-at-asml/wellbeing/marathon_eindhoven_2019_event_paul_raats-02104.jpg?mw=525&rev=55a8c6f40bfc470e9098659b498fb812&hash=A924923E40256431A055C1A1F859E69E',
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Purpose', style: { color: '#0f238c' } },
				content: {
					text: 'Being part of ASML means being part of something bigger than yourself. We play an active role in the communities we operate in, and you can too. You’ll be able to volunteer, give back to your community and make a difference.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/working-at-asml/life-at-asml/technology-promotion-stem-engineer-helping-kids-experiments-chemisty-physics.jpg?mw=525&rev=2f2d669196344a309cc7834001d11db7&hash=6D23C2B094BB1466F3D3DE6B9C85FC70',
				},
				link: { url: '/' },
			},

			{
				title: { text: 'Networks & clubs', style: { color: '#0f238c' } },
				content: {
					text: 'Are you interested in sustainability? A keen sportsperson? Passionate – like us – about diversity and inclusion? When you work at ASML there are lots of opportunities to get involved, and build professional connections as well as friendships. Find out about our networks and clubs for ASML employees.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/working-at-asml/life-at-asml/img_5639.jpg?mw=525&rev=fa136d24b61d44ee88c11f49ebaf4048&hash=86367D9BEC545D1CF29DE4DDCE43D211',
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Events', style: { color: '#0f238c' } },
				content: {
					text: 'Did you know that we annually host one of the largest developer events in the world? From holiday-inspired occasions to community and industry events, there’s always another occasion on our calendar that you can join.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/working-at-asml/life-at-asml/jwc08106.jpg?mw=525&rev=f63edba63b15481fa654c3ee6c33bbe9&hash=AE2EE2D4ABFC7FA23D41A9569ED66460',
				},
				link: { url: '/' },
			},
		],
	},
	cards2: {
		style: { backgroundColor: 'white' },
		cards: [
			{
				title: {
					text: 'Learning and development ',
					style: { color: '#0f238c' },
				},
				content: {
					text: 'Consider your career path a playground. We have various tools in place to support you in driving your own development, from classroom training to personal coaching, potential acceleration programs and more. Learn how, with ASML, you’ll have the time, opportunity, and support to drive your own development.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/working-at-asml/life-at-asml/asml_office_shoot_floor6_vdh_april2021-36.jpg?mw=525&rev=8d61bd6c3c9842a8984105e16eeb1480&hash=4807C40D232E1F602FA87DAC7A961BC8',
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Benefits', style: { color: '#0f238c' } },
				content: {
					text: 'We want you to join ASML to be part of progress. And we want you to stay because you share in our success. We offer highly competitive compensation and benefits packages to attract and retain the very best talent, which means your package will cover much more than just a salary.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/career-events/the-netherlands/asml_plaza_man_working.jpg?mw=525&rev=04d1b6beec524fc4a708b91e885af8e2&hash=BA50F0B7F7474BEE7F94FECF61D8D45B',
				},
				link: { url: '/' },
			},
		],
	},
	textImage4: {
		style: { backgroundColor: '#EFF2F4' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: 'How can you be part of progress?',
			style: {
				color: '#0F238C',
				fontSize: '28px',
				fontWeight: '500',
				lineHeight: '28px',
				letterSpacing: '-0.5px',
				paddingBottom: '30px',
			},
		},
		content: {
			text: [
				'Whether it’s in the field of space engineering, the future of mobility, or even improving the things we use every day: what we do moves the world forward. Come be a part of ASML, and be a part of progress.',
			],

			style: {
				color: '#2b2a3e',
				fontSize: '20px',
				lineHeight: '32px',
			},
		},
		video: {
			url: 'https://www.youtube.com/embed/UvdzyomzL5Y',
			style: { width: '100%', height: '300px' },
		},
	},
	teaserList: {
		style: { marginBottom: '20px' },
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
					url: 'https://www.asml.com/-/media/asml/images/careers/job-categories/job-categories-planning.jpg?mw=525&rev=a7aad13e18c84c5ca3ebe2c26a7d1d5f&hash=15247874BFAF75C4AFE5B040D0370EC2',
				},
				title: { text: 'Job categories', style: { color: 'white' } },
				content: {
					text: 'Explore job opportunities by category, ranging from data science to mechatronics and everything in between.',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/students-and-graduates/46539.jpg?mw=525&rev=28c229e774964034a642710ebf8b14d1&hash=05F81BFD18AE8286F5B4242B8E3E63B3',
				},
				title: { text: 'Students & graduates', style: { color: 'white' } },
				content: {
					text: 'See our internships, scholarships, and career events for students and graduates in the Netherlands and the US.',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/technology/cleanroom/47061-cleanroom-euv-wafer-stage-training.jpg?mw=525&rev=6db825d43c374982b60743f03cfe8cf3&hash=6C529088DFFE46DD7BA2A52C9B380C5D',
				},
				title: { text: 'Organization', style: { color: 'white' } },
				content: {
					text: 'R&D, manufacturing, and customer support are the pillars of our organization, supported by our corporate functions.',
					style: { color: 'white' },
				},
				link: { url: '/careers' },
			},
		],
	},
};
