import React from 'react';
import Cards from '../../../Components/Cards/Cards';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import LongCopy from '../../../Components/LongCopy/LongCopy';
import './CustomerNet.css';
function CustomerNet() {
	return (
		<section id="microchipBasics">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>

			<div>
				<LongCopy data={data?.longCopy} />
			</div>
			<div>
				<Cards data={data?.cards1} />
			</div>
			<div>
				<Cards data={data?.cards2} />
			</div>
		</section>
	);
}

export default CustomerNet;
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
			background: 'linear-gradient(45deg,#0f238c,#00a3e0 100%)',
			height: '644px',
		},
	},

	longCopy: {
		style: {
			backgroundColor: '#EFF2F4',
		},
		title: {
			text: 'Registering for CustomerNet',
			style: {
				fontSize: '36px',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: '#0F238C',
				padding: '20px 0px',
			},
		},
	},
	cards1: {
		style: { backgroundColor: '#EFF2F4' },
		cards: [
			{
				title: {
					text: 'Register',
					style: {
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
						letterSpacing: '-0.6px',
						lineHeight: '20px',
					},
				},
				content: {
					text: 'Click here to request access to CustomerNet. Make sure you have the name of your ASML account manager ready.',
					style: { color: '#555464', fontSize: '16px', lineHeight: '20px' },
				},
				link: { url: '/' },
			},
			{
				title: {
					text: 'Why register?',
					style: {
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
						letterSpacing: '-0.6px',
						lineHeight: '20px',
					},
				},
				content: {
					text: 'Access tailored product and service documentation such as release bulletins and spare parts lists, training programs, and more.',
					style: { color: '#555464', fontSize: '16px', lineHeight: '20px' },
				},
				link: { url: '/' },
			},
			{
				title: {
					text: 'Who can register?',
					style: {
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
						letterSpacing: '-0.6px',
						lineHeight: '20px',
					},
				},
				content: {
					text: 'Verified owners of ASML equipment and their employees can register for CustomerNet.',
					style: { color: '#555464', fontSize: '16px', lineHeight: '20px' },
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
					text: 'Forgot your password?',
					style: {
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
						letterSpacing: '-0.6px',
						lineHeight: '20px',
					},
				},
				content: {
					text: 'Find out how to regain access to your CustomerNet account.',
					style: { color: '#555464', fontSize: '16px', lineHeight: '20px' },
				},
				link: { url: '/' },
			},
			{
				title: {
					text: 'Contact CustomerNet',
					style: {
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
						letterSpacing: '-0.6px',
						lineHeight: '20px',
					},
				},
				content: {
					text: 'Get in touch with us if you have any questions or are experiencing an issue with CustomerNet.',
					style: { color: '#555464', fontSize: '16px', lineHeight: '20px' },
				},
				link: { url: '/' },
			},
			{
				title: {
					text: 'Contact Sales',
					style: {
						color: '#0f238c',
						fontSize: '20px',
						fontWeight: '500',
						letterSpacing: '-0.6px',
						lineHeight: '20px',
					},
				},
				content: {
					text: 'Get in touch with our sales team to learn more about ASML products and services.',
					style: { color: '#555464', fontSize: '16px', lineHeight: '20px' },
				},
				link: { url: '/' },
			},
		],
	},
};
