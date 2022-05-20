import React from 'react';
import './History.css';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import CenteredText from '../../../Components/CenteredText/CenteredText';
import LongCopy from '../../../Components/LongCopy/LongCopy';
import RelatedContent from '../../../Components/RelatedContent/RelatedContent';
function History() {
	return (
		<section id="history">
			<div>
				<HeroHeader data={data?.firstDiv} />
			</div>
			<div>
				<CenteredText data={data?.centeredText} />
			</div>
			<div>
				<LongCopy data={data?.longCopy1} />
			</div>
			<div>
				<LongCopy data={data?.longCopy2} />
			</div>
			<div>
				<LongCopy data={data?.longCopy3} />
			</div>
			<div>
				<LongCopy data={data?.longCopy4} />
			</div>
			<div>
				<LongCopy data={data?.longCopy5} />
			</div>
			<div>
				<LongCopy data={data?.longCopy5} />
			</div>
			<div>
				<RelatedContent data={data?.relatedContent} />
			</div>
		</section>
	);
}

export default History;

const data = {
	firstDiv: {
		title: {
			text: 'History',
			style: { color: 'white' },
		},
		content: {
			text: 'Over 30 years of ingenuity and perseverance',
			style: { color: 'white' },
		},
		style: {
			background:
				'linear-gradient(to right,rgba(47, 48, 70, 1) -30%,rgba(41, 100, 100, 0) 120%),url(https://www.asml.com/-/media/asml/images/company/about-asml/history/silicon-repeater-history.jpg?mw=1920&rev=593e4bdcd553478b948c93001ca50f8a&hash=93A8B1BBA0A9554B1E7177356E711AD7)',
			height: '740px',
		},
	},
	centeredText: {
		style: {
			backgroundColor: '#EFF2F4',
		},
		content: {
			text: "ASML's history is rich with innovation and collaboration. Read more to learn how we've grown into the semiconductor industry leader we are today.",
			style: {
				fontSize: '48px',
				fontWeight: '300',
				lineHeight: '48px',
				letterSpacing: '-1px',
				color: '#0F238C',
				padding: '100px 0px',
			},
		},
	},
	longCopy1: {
		style: {
			backgroundColor: '#EFF2F4',
		},
		title: {
			text: 'The 1980s: humble beginnings',
			style: {
				fontSize: '48px',
				fontWeight: '700',
				lineHeight: '48px',
				letterSpacing: '-1px',
				color: '#0F238C',
				padding: '20px 0px',
			},
		},
		content: {
			text: [
				'In 1984, electronics giant Philips and chip-machine manufacturer Advanced Semiconductor Materials International (ASMI) created a new company to develop lithography systems for the growing semiconductor market. Called ASM Lithography, we began our days inauspiciously, located in a leaky shed next to a Philips office in Eindhoven, the Netherlands. Building on the R&D that had been in the works since the early 1970s, that same year we launched our first system, the PAS 2000 stepper.',
				,
				'We grew fast, with Philips and ASMI scaling their investments to help make ASML a success. In 1985, with 100 employees on board, we moved into our newly built office and factory in Veldhoven, just a few kilometers from the Philips research labs. In 1986 we brought the PAS 2500 stepper to market, featuring new alignment technology that would be the foundation for many future innovations in our machines. That same year we established our existing partnership with lens manufacturer Carl Zeiss.',
				,
				'By 1988, we had begun to make in-roads in the Asian market, after Philips established a joint-venture foundry in Taiwan. In the United States, we grew from a few employees to 84, spread over five office locations. But in a market of fierce competition and many suppliers, the small unknown company from the Netherlands couldn’t catch a break. ASML had few customers and was unable to stand on its own two feet. Making matters worse, shareholder ASMI was unable to maintain the high levels of investment with little return and decided to withdraw, while the global electronics industry took a turn for the worse, and Philips announced a vast cost-cutting program. The life of our young cash-devouring lithography company hung in the balance. Guided by a strong belief in the ongoing R&D and in desperate need of funds, ASML executives reached out to Philips board member Henk Bodt, who persuaded his colleagues to lend a final helping hand.',
			],
			style: {
				fontSize: '20px',
				fontWeight: '300',
				lineHeight: '32px',
				letterSpacing: '-1px',
				color: '#2b2a3e',
				paddingBottom: '10px',
			},
		},
	},
	longCopy2: {
		style: {
			backgroundColor: '#EFF2F4',
		},
		title: {
			text: 'The 1990s: from helping hand to IPO',
			style: {
				fontSize: '48px',
				fontWeight: '700',
				lineHeight: '48px',
				letterSpacing: '-1px',
				color: '#0F238C',
				padding: '20px 0px',
			},
		},
		content: {
			text: [
				'The investment was put to good use. Within the year, we launched a breakthrough platform, the PAS 5500. With its industry-leading productivity and resolution, the PAS 5500 brought on board the key customers that ASML needed to turn a profit. It was a first step to maturity. In 1995, ASML became a fully independent public company, listed on the Amsterdam and New York stock exchanges. Philips sold half of its shares at the IPO and sold off the rest in the following years. The IPO brought in the capital to fuel our growth further, and we expanded our R&D and production facilities at De Run in Veldhoven, which would later become our new headquarters.',
			],
			style: {
				fontSize: '20px',
				fontWeight: '300',
				lineHeight: '32px',
				letterSpacing: '-1px',
				color: '#2b2a3e',
				paddingBottom: '10px',
			},
		},
	},
	longCopy3: {
		style: {
			backgroundColor: '#EFF2F4',
		},
		title: {
			text: 'The 2000s: TWINSCAN and immersion technology pave the way',
			style: {
				fontSize: '48px',
				fontWeight: '700',
				lineHeight: '48px',
				letterSpacing: '-1px',
				color: '#0F238C',
				padding: '20px 0px',
			},
		},
		content: {
			text: [
				'In 2001, we introduced the TWINSCAN system and its revolutionary dual-stage technology. These systems expose one wafer while the next wafer is being measured and aligned, which maximizes the productivity and accuracy of the system, boosting ownership value for our customers. In the same year, we completed the acquisition of the Silicon Valley Group to further strengthen ASML’s capabilities in semiconductor technological advancement. The TWINSCAN AT:1150i debuted as the first immersion machine in 2003, followed by the TWINSCAN XT:1250i, XT:1400i, and in 2006 the first volume production machine for immersion, the XT:1700i. In 2007, we shipped the TWINSCAN XT:1900i immersion system with a numerical aperture of 1.35 – the highest in the industry. With this new technology, we enabled our customers to produce even smaller chip features by projecting light through a layer of water between the lens and the wafer.',
				'Later in 2007, we acquired BRION, a leading provider of semiconductor design and manufacturing optimization solutions. This was the start of our ‘Holistic Lithography’ strategy. We united our knowledge of  lithography systems with the skill to optimize the chip manufacturing process before, during, and after lithography. Another key product in the early phase of our Holistic Lithography strategy was YieldStar, our metrology system which provides real-time measurements and corrections during chip manufacturing. The first YieldStar (250D) was shipped to customers in 2008.',
			],
			style: {
				fontSize: '20px',
				fontWeight: '300',
				lineHeight: '32px',
				letterSpacing: '-1px',
				color: '#2b2a3e',
				paddingBottom: '10px',
			},
		},
	},
	longCopy4: {
		style: {
			backgroundColor: '#EFF2F4',
		},
		title: {
			text: 'The 2010s: the holistic era',
			style: {
				fontSize: '48px',
				fontWeight: '700',
				lineHeight: '48px',
				letterSpacing: '-1px',
				color: '#0F238C',
				padding: '20px 0px',
			},
		},
		content: {
			text: [
				'In 2010, we shipped the first prototype Extreme Ultraviolet (EUV) lithography tool (NXE:3100) to the research facility of an Asian chipmaker, marking the beginning of a new era in lithography. EUV lithography uses light of a shorter wavelength to manufacture smaller chip features, resulting in faster, more powerful chips.',
				'In 2013, we acquired Cymer, the San Diego-based manufacturer of lithography light sources, to accelerate the development of EUV. We shipped the second generation EUV system (NXE:3300) that year, with the third generation EUV system (NXE:3350) following in 2015. EUV lithography turned the corner in 2016, when customers began ordering our first production-ready system NXE:3400 in batches. During this time, we continued to improve the performance of our immersion lithography systems, and the NXT1970Ci and NXT1980Di, the work horses of the chip industry, were installed in customer factories around the world. For more information, visit Cymer.',
				,
				'We expanded our holistic lithography portfolio in 2016 with the acquisition of Hermes Microvision (HMI) , a leading supplier of e-beam metrology tools. Our joint effort resulted in the first shipment of the e-beam pattern fidelity metrology system (ePfm5) in 2017.',
				,
				'Following the liquidation in 2018 of the high-tech company Mapper based in Delft, the Netherlands, ASML agreed to acquire the company’s intellectual property assets . We also offered suitable positions to Mapper’s highly skilled employees working in Research & Development and product assembly.',
			],
			style: {
				fontSize: '20px',
				fontWeight: '300',
				lineHeight: '32px',
				letterSpacing: '-1px',
				color: '#2b2a3e',
				paddingBottom: '10px',
			},
		},
	},
	longCopy5: {
		style: {
			backgroundColor: '#EFF2F4',
		},
		title: {
			text: 'The 2020s: unprecedented challenges, impressive innovations',
			style: {
				fontSize: '48px',
				fontWeight: '700',
				lineHeight: '48px',
				letterSpacing: '-1px',
				color: '#0F238C',
				padding: '20px 0px',
			},
		},
		content: {
			text: [
				'At the beginning of 2020, EUV moved into high volume manufacturing and we celebrated the 100th EUV system shipment. But 2020 was also significant for another reason: the COVID-19 pandemic. Our teams around the world proved their ability to adapt and improvise by innovating new ways to support customers from a distance, lending their expertise  to the pandemic response and reaching out to support our local communities.',
				'Development of our next-generation EUV platform with a higher numerical aperture of 0.55 (‘High-NA’) also ramped up. This platform, called EXE, has a novel optics design and significantly faster stages. We will ship the first EXE systems to customers in 2023.',
				,
				'In November 2020, the acquisition of Berliner Glas Group was completed and we officially welcomed the Berliner Glas team to the ASML family. The technical glass division of the group was divested to Glas Trösch Group in April 2021.',
			],
			style: {
				fontSize: '20px',
				fontWeight: '300',
				lineHeight: '32px',
				letterSpacing: '-1px',
				color: '#2b2a3e',
				paddingBottom: '10px',
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
				span: 2,
				offset: 2,
			},
		},
		cards: [
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/about-asml/history/berliner-glas/clamp.jpg?mw=525&rev=05febf6f8d344347831db751a61500c5&hash=2038856621232A9E7584E01685A71034',
				},
				title: { text: 'Berliner Glas', style: { color: 'white' } },
				content: {
					text: 'Berliner Glas, a hub of wafer chuck technology and manufacturing expertise, joined the ASML family in 2020',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/about-asml/history/hmi/escan-600.jpg?mw=525&rev=9176186644cf40b8a70877340837dd8f&hash=549B48A40FEAC044237DBFA1A10513AE',
				},
				title: { text: 'HMI', style: { color: 'white' } },
				content: {
					text: 'Having joined the ASML family in 2016, HMI has become an integral part of our holistic lithography portfolio with innovative e-beam metrology and inspections solutions.',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
			{
				image: {
					url: 'https://www.asml.com/-/media/asml/images/company/about-asml/history/cymer/41518-san-diego-campus.png?mw=525&rev=fb9152e3e6084a6eb4b264cc040803d5&hash=193CE8F8616B33D1C3A0E839AE8FBD0F',
				},
				title: { text: 'Cymer', style: { color: 'white' } },
				content: {
					text: 'Acquired by ASML in 2013, Cymer is an independently operated business that develops, manufactures and services deep-ultraviolet (DUV) light sources.',
					style: { color: 'white' },
				},
				link: { url: '/' },
			},
		],
	},
};
