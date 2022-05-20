import React from 'react';
import CenteredText from '../../../Components/CenteredText/CenteredText';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import RelatedContent from '../../../Components/RelatedContent/RelatedContent';
import TextImage from '../../../Components/TextImage/TextImage';

function Software() {
	return (
		<section id="software">
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
				<TextImage data={data?.textImage4} />
			</div>
			<div>
				<TextImage data={data?.textImage5} />
			</div>
			<div>
				<TextImage data={data?.textImage6} />
			</div>
			<div>
				<RelatedContent data={data?.relatedContent} />
			</div>
		</section>
	);
}

export default Software;
const data = {
	heroHeader: {
		title: {
			text: 'Software at ASML',
			style: { color: '#0F238C' },
		},
		content: {
			text: 'Our lithography machines are a hybrid of high-tech hardware and advanced software',
			style: { color: '#555464' },
		},
		style: {
			background:
				'url(https://www.asml.com/-/media/asml/images/technology/software/lines-of-code.jpg?mw=1920&rev=b6c8a66382ef47a2b1e361989c7b4d45&hash=707005B32D4B71C6B1E25BCDC15690EE)',
			height: '644px',
		},
	},
	centeredText: {
		style: { backgroundColor: '#C0E1F4' },
		content: {
			text: 'You might think of ASML as a hardware company, but we actually have one of the world’s largest and most pioneering software communities.',
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
			text: 'Embedded software',
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
				'All our lithography systems make use of our embedded software, which steers and controls our machines. Under development for the last 30 years, our embedded software code base is now comprised of millions of lines of code. We increasingly rely on an industry-leading technique called model-driven engineering (MDE) to improve our code, providing our business with a competitive advantage and our customers with complete confidence in our machines',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
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
			text: 'Scanner metrology software',
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
				'Software also coordinates the behavior of the powerful mechatronic modules inside our lithography systems (also known as ‘scanners’). It is needed to position the silicon wafers at rapid speed, with nanometer precision.',
				'Our scanner metrology software helps measure and compensate for the sub-nanometer inaccuracies that inevitably creep in during production due to material imperfections, temperature fluctuations or atmospheric pressure changes. It calculates how our hardware should behave to correct for this, coordinating the many components to maximize system performance. ',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
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
			text: 'Application software',
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
				'Our application software allows our customers to optimize production. It is essentially our ‘off-machine’ software, which is used for system calibration, diagnostics, evaluation and automation, helping our customers interact with their systems.',
				'A user interface sits on top of our application software. This is an increasingly important component, providing a seamless user experience for the increasing number of people that need to work with our application software thanks to advancing digitization.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/technology/software/cleanroom-technician.jpg?mw=1200&rev=6a13aead07304feda1b4b17bbee6b027&hash=8F567621F29C3F2206659E347F22C217',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
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
			text: 'Computational lithography software',
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
				'Computational lithography software is a relatively new field in the semiconductor industry. It’s a technique that’s used to reconstruct the reticle mask, because the structures patterned onto a silicon wafer deform when we scale down to nanometer resolutions.',
				'Our work in computational lithography focuses on developing accurate predictions of the semiconductor patterning process. However, today’s advanced chips have billions of transistors and the resulting simulation models can quickly become computationally intensive. So, our computational software also finds clever ways to simplify the model.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
	},
	textImage5: {
		style: { backgroundColor: 'white' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: 'Integrating machine learning',
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
				'Our software teams have been developing machine learning tools for years to dramatically speed up the simulation and manufacturing process.',
				'The methodologies used to develop rigorous physical models and machine learning models are very similar. Both need lots of experimental results and data to shape the prediction, but machine learning saves a lot of time and effort, while improving accuracy and consistency. Machine learning also presents an opportunity to more fully utilize the large amounts of data generated in a manufacturing environment to enhance process control.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/technology/software/conceptualization-big-data.jpg?mw=1200&rev=31ef56e0ebc841e3a286554cbbc3aaf2&hash=1D36E276A3494A1EA9D20D53A190C43C',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},
	textImage6: {
		style: { backgroundColor: 'white' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: 'Working with big data',
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
				'Our data scientists work with a unique combination of extreme complexity and very high-volume data. They need to utilize disparate data sources in novel ways and generate actionable insights. These insights can create new product offerings or improve the capabilities, performance and efficiency of existing products and services throughout the company',
				'For example, our metrology systems generate terabytes of data. Extracting, managing, and analyzing such huge volumes of data to optimize our machines is a major challenge for our software development teams.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
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
					url: 'https://www.asml.com/-/media/asml/images/careers/job-categories/software-engineering/47140-computer-science-software-engineering-jobs.jpg?mw=525&rev=f85e1743152f49f29ac9c925ad3d2f12&hash=AC68B21B2BBA44F483533D4CEB1B9B98',
				},
				title: {
					text: 'Computer science & software engineering',
					style: { color: 'white' },
				},
				content: {
					text: "Find out what it's like working as a computer scientist or software developer at ASML working in C++, C#, Python or Java.",
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/products/computational-lithography/47149-lithography-elements-wafer-reticle.jpg?mw=525&rev=1f3f7ac00e614d8da3670730c6ae1908&hash=889DE123C38ACA47D30B8B719E4A156F',
				},
				title: { text: 'Computational lithography', style: { color: 'white' } },
				content: {
					text: "ASML's industry-leading computational lithography products enable accurate lithography simulations that help to improve chip yield and quality.",
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/products/metrology-and-inspection/43677-inside-nxe3400.jpg?mw=525&rev=a35eba6242ac4e578bd6c8f9cbd04552&hash=F8EEBFE01A872A14AA48CC06BC05C3FD',
				},
				title: {
					text: 'Metrology & inspection systems',
					style: { color: 'white' },
				},
				content: {
					text: 'Delivering speed and accuracy, our metrology and inspection portfolio covers every step manufacturing processes, from R&D to mass production.',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
		],
	},
};
