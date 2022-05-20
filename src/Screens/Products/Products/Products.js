import React from 'react';
import Cards from '../../../Components/Cards/Cards';
import CenteredText from '../../../Components/CenteredText/CenteredText';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import LongCopy from '../../../Components/LongCopy/LongCopy';
import RelatedContent from '../../../Components/RelatedContent/RelatedContent';
import TextImage from '../../../Components/TextImage/TextImage';
import './Products.css';
function Products() {
	return (
		<section id="products">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>
			<div>
				<CenteredText data={data?.centeredText} />
			</div>
			<div>
				<LongCopy data={data?.longCopy} />
			</div>
			<div>
				<Cards data={data?.cards} />
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
				<RelatedContent data={data?.relatedContent} />
			</div>
		</section>
	);
}

export default Products;
const data = {
	heroHeader: {
		title: {
			text: 'Our products',
			style: { color: '#0F238C' },
		},
		content: {
			text: 'The semiconductor industry is driven by affordable scaling, which is powered by ASML’s holistic lithography product portfolio',
			style: { color: '#555464' },
		},
		style: {
			background:
				'url(https://www.asml.com/-/media/asml/images/products/46989-cleanroom-assembly.jpg?mw=1920&rev=8412db1bdb904b48953bc70be4b2a876&hash=D52FB70CB8925968E7AA1C29D0EDFA9D)',
			height: '644px',
		},
	},
	centeredText: {
		style: { backgroundColor: '#EFF2F4' },
		content: {
			text: 'We provide our customers with everything they need – hardware, software and services – to mass produce patterns on silicon, allowing them to increase the value and lower the cost of a chip.',
			style: {
				fontSize: '36px',
				fontWeight: '300',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: '#0F238C',
			},
		},
	},
	longCopy: {
		style: {
			backgroundColor: 'white',
		},
		title: {
			text: 'Lithography systems',
			style: {
				fontSize: '48px',
				fontWeight: '700',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: '#0F238C',
				padding: '20px 0px',
			},
		},
	},
	tenthDiv: {
		title: {
			text: 'Our products',
			style: { color: '#0f238c' },
		},
		content: {
			text: 'The semiconductor industry is driven by affordable scaling, which is powered by ASML’s holistic lithography product portfolio',
			style: { color: '#555464' },
		},

		image: {
			url: 'https://www.asml.com/-/media/asml/images/products/46989-cleanroom-assembly.jpg?mw=1920&rev=8412db1bdb904b48953bc70be4b2a876&hash=D52FB70CB8925968E7AA1C29D0EDFA9D)',
			style: {
				height: '644px',
			},
		},
	},
	cards: {
		style: { backgroundColor: 'white' },
		cards: [
			{
				title: { text: 'EUV lithography systems', style: { color: '#0f238c' } },
				content: {
					text: 'Providing highest resolution in high-volume manufacturing, our extreme ultraviolet lithography machines are pushing Moore’s Law forward.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/products/euv-lithography-systems/twinscan-nxe3400c.png?mw=525&rev=0fa791e6417e4d19b195153f383f29ae&hash=98BCF498398DD6C9A4153C6A6C830BB0',
				},
				link: {
					url: '/',
				},
			},
			{
				title: { text: 'DUV lithography systems', style: { color: '#0f238c' } },
				content: {
					text: 'Our deep ultraviolet lithography systems dive deep into the UV spectrum to print the tiny features that form the basis of the microchip.',
					style: { color: '#555464' },
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/products/duv-lithography-systems/twinscan-nxt2000i.png?mw=525&rev=5574451a41414910b76e4031bd544a54&hash=AF439C14EDD7720BA7E8A09A09FD7C92',
				},
				link: {
					url: '/',
				},
			},
		],
	},
	textImage1: {
		style: { backgroundColor: '#EFF2F4' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: 'Refurbished systems',
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
				'Almost every lithography system that we’ve ever shipped is still in use at a customer fab. We refurbish ‘classic’ PAS 5500 and TWINSCAN lithography systems for a new life and a new purpose.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/products/refurbished-systems/pas-5500-1150c.png?mw=1200&rev=2df5b6fb3ca24ce8ab3e088b8f492c5b&hash=385BEA6A4D5D1D57C9AD3D0ED7A22DDF',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},
	textImage2: {
		style: { backgroundColor: 'white' },
		title: {
			text: 'Metrology & inspection systems',
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
				'Delivering speed and accuracy, our metrology and inspection portfolio covers every step manufacturing processes, from R&D to mass production.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/products/metrology-and-inspection/43677-inside-nxe3400.jpg?mw=1200&rev=a35eba6242ac4e578bd6c8f9cbd04552&hash=F64D7ADAEBC8A87ADB4BF36081C99607',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},
	textImage3: {
		style: { backgroundColor: '#EFF2F4' },
		rowStyle: {
			display: 'flex',
			flexDirection: 'row-reverse',
			justifyContent: 'center',
		},
		title: {
			text: 'Computational lithography',
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
				'ASML is pioneering this industry-leading technique, which minimizes the physical and chemical effects that interfere with the quality of a chip.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/products/computational-lithography/47149-lithography-elements-wafer-reticle.jpg?mw=1200&rev=1f3f7ac00e614d8da3670730c6ae1908&hash=8466C2621264A6C4BF8DE2E7F07A222C',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
		},
	},
	textImage4: {
		style: { backgroundColor: 'white' },
		title: {
			text: 'Customer support',
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
				'At ASML, the customer always comes first. With more than 5,000 customer support employees, including service engineers and applications specialists, we make sure our systems in our customers’ fabs are running smoothly.',
			],
			style: { color: '#2b2a3e', fontSize: '20px', lineHeight: '32px' },
		},
		image: {
			url: 'https://www.asml.com/-/media/asml/images/products/customer-support/47027-cleanroom-assembly.jpg?mw=1200&rev=f5ad3aaa15094d7bbf08418f8886b789&hash=ED90B97D39A5BC509170540B653AAAAA',
			style: {
				objectFit: 'cover',
				height: '340px',
				width: '100%',
			},
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
					url: 'https://www.asml.com/-/media/asml/images/technology/47006-cleanroom-assembly.jpg?mw=525&rev=fd75ffe7b03d486db36b1be249a00f5c&hash=6FD6AB8586D1D564DC7C5D9E08B78025',
				},
				title: { text: 'Technology', style: { color: 'white' } },
				content: {
					text: 'Learn about the technology behind our lithography, metrology and inspection, and software solutions.',
					style: { color: 'white' },
				},
				link: {
					url: '/technology',
				},
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
				link: {
					url: '/products',
				},
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
				link: {
					url: '/careers',
				},
			},
		],
	},
};
