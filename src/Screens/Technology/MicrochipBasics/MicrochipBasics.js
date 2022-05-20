import React from 'react';
import './MicrochipBasics.css';
import CenteredText from '../../../Components/CenteredText/CenteredText';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import TextImage from '../../../Components/TextImage/TextImage';
import LongCopy from '../../../Components/LongCopy/LongCopy';
import Accordion from '../../../Components/Accordion/Accordion';
import Cards from '../../../Components/Cards/Cards';
import RelatedContent from '../../../Components/RelatedContent/RelatedContent';

function MicrochipBasics() {
	return (
		<section id="microchipBasics">
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
				<TextImage data={data?.textImage2} />
			</div>
			<div>
				<TextImage data={data?.textImage3} />
			</div>
			<div>
				<LongCopy data={data?.longCopy1} />
			</div>
			<div>
				<TextImage data={data?.textImage4} />
			</div>
			<div>
				<Accordion data={data?.accordion} />
			</div>
			<div>
				<LongCopy data={data?.longCopy2} />
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

export default MicrochipBasics;
const data = {
	heroHeader: {
		title: {
			text: 'The basics of microchips',
			style: { color: '#0F238C' },
		},
		content: {
			text: 'Everything you need to know about microchips – the foundation of the digital world',
			style: {
				color: '#555464',
			},
		},
		style: {
			background:
				'url(https://www.asml.com/-/media/asml/images/technology/about-our-technology/wafer-close-up.jpg?mw=1920&rev=d43c1e092e744f198b52d8e2b617d30f&hash=4E44E0D4BF66BC73DA7C4EA3051CF471)',
			height: '644px',
		},
	},
	centeredText: {
		style: { background: 'linear-gradient(45deg,#ff8c18,#cc4a05 100%)' },
		content: {
			text: 'The building blocks of technology',
			style: {
				fontSize: '36px',
				fontWeight: '300',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: 'white',
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
				'A microchip (also called a chip, a computer chip, an integrated circuit or IC) is a set of electronic circuits on a small flat piece of silicon. On the chip, transistors act as miniature electrical switches that can turn a current on or off. The pattern of tiny switches is created on the silicon wafer by adding and removing materials to form a multilayered latticework of interconnected shapes.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/technology/cleanroom/engineer-holds-microchip.jpg?mw=1200&rev=54675ac4f7494de79567ff2c0965d840&hash=AC11D8647DF00F7F02B2C1516941B1C7',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
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
			text: 'Digital gold',
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
				'Silicon is the material of choice in the chip industry. Unlike the metals normally used to conduct electrical currents, silicon is a ‘semiconductor’, meaning that its conductive properties can be increased by mixing it with other materials such as phosphorus or boron. This makes it possible to turn an electrical current on or off.',
				'The good news is that it’s everywhere! Silicon is made from sand, and it is the second most abundant element on earth after oxygen. Silicon wafers are made using a type of sand called silica sand, which is made of silicon dioxide. The sand is melted and cast in the form of a large cylinder called an ‘ingot’. This ingot is then sliced into thin wafers.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/technology/about-our-technology/47151-wafer-with-sand-and-silicon-crystals.jpg?mw=1200&rev=3086a017755b4f6f9f2bc4775fa57744&hash=A4EE7CC89BA09F584CB0E10BC0F479C9',
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
			text: 'The nano scale',
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
				'A microchip the size of your fingernail contains billions of transistors, so it’s easy to understand just how small the features on a chip need to be. Chip features are measured in nanometers. A nanometer is one billionth of a meter, or a millionth of a millimeter.',
				'For comparison, a human red blood cell is 7,000 nanometers in diameter, and the average virus is 14 nanometers. The smallest structures on the most advanced chips are currently 10 nanometers. ASML’s EUV (extreme ultraviolet) technology enables the scale of the smallest feature to be reduced even further. The smaller the features in the patterns that our systems can create, the more transistors manufacturers can fit on a chip, and the more the chip can do.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/technology/about-our-technology/red-blood-cells.jpg?mw=1200&rev=6a3c5e216c5f409b8548ea1f7f8c5eff&hash=597A513678A0FB085A64991F3F3C37D5',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},
	longCopy1: {
		style: {
			backgroundColor: '#EFF2F4',
		},
		title: {
			text: '‘Flavors’ of chips',
			style: {
				fontSize: '36px',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: '#0F238C',
				padding: '20px 0px',
			},
		},
		content: {
			text: [
				'Logic chips are the ‘brains’ of electronic devices – they process information to complete a task. Among Logic chips, CPUs (central processing units) are the ‘original’ chips, first designed in the 1960s. But there are also processors with specific functionality in mind, such as GPUs (graphical processing units, which are optimized for visual display) and NPUs (neural processing units, designed for deep and machine learning applications).',
				,
				'Memory chips store information. There are two types of Memory chips: DRAM (Dynamic Random Access Memory), which are the ‘working memory’ chips that only save data while the device’s power is turned on, and NAND Flash, which save data even after the device is turned off. For example, DRAM helps to run programs on your device, whereas NAND stores your photos. Whereas DRAM is fast, NAND is slow to read and write data.',
				,
			],
			style: {
				fontSize: '20px',
				lineHeight: '32px',
				letterSpacing: '-1px',
				color: '#2b2a3e',
				paddingBottom: '10px',
			},
		},
	},
	textImage4: {
		style: { backgroundColor: 'white' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: 'Computing power',
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
				'Chip improvements are behind the incredible increase in computing power and memory function that has allowed technology to advance to where it is today. 1956 to 2015, computing power increased one trillion-fold, thanks to chips. Think about this: the computer that navigated the Apollo missions to the moon was about twice as powerful as a Nintendo console. It had 32.768 bits of Random Access Memory (RAM) and 589.824 bits of Read Only Memory (ROM). A modern smartphone has around 100,000 times as much processing power, with about a million times more RAM and seven million times more ROM.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/technology/about-our-technology/bandwidth-close-up-computer-connection-1148820.jpg?mw=1200&rev=298b7c3ef6724761b2586f4fdba5e8f3&hash=8767B2A29095A4C06A4C5E9795FB9839',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},
	accordion: {
		header: 'Frequently asked questions about microchips',
		items: [
			{
				id: 1,
				title: { text: 'Does ASML make microchips?' },
				content: {
					text: 'No, ASML doesn’t make chips. ASML makes photolithography machines, which our customers use to mass produce chips.',
				},
			},
			{
				id: 2,
				title: { text: 'What are microchips made of?' },
				content: {
					text: 'Microchips are printed on silicon wafers, which are made from silica sand.',
				},
			},
			{
				id: 3,
				title: { text: 'What are microchips used for?' },
				content: {
					text: 'Microchips are used in almost every electronic device we use today, including smartphones, gaming consoles, cars and medical equipment.',
				},
			},
		],
	},
	longCopy2: {
		style: {
			backgroundColor: 'white',
		},
		title: {
			text: 'Read more',
			style: {
				fontSize: '36px',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: '#0F238C',
				padding: '20px 0px',
			},
		},
	},
	cards: {
		style: { backgroundColor: 'white' },
		cards: [
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
					url: 'https://www.asml.com/-/media/asml/images/technology/47006-cleanroom-assembly.jpg?mw=525&rev=fd75ffe7b03d486db36b1be249a00f5c&hash=6FD6AB8586D1D564DC7C5D9E08B78025',
				},
				title: { text: 'Technology', style: { color: 'white' } },
				content: {
					text: 'Learn about the technology behind our lithography, metrology and inspection, and software solutions.',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/products/46989-cleanroom-assembly.jpg?mw=525&rev=8412db1bdb904b48953bc70be4b2a876&hash=01FBAECA9B321B6098B905B47C8861D4',
				},
				title: { text: 'Products', style: { color: 'white' } },
				content: {
					text: 'Find out how we provide our customers with the hardware, software and services they need to mass produce patterns on silicon.',
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
