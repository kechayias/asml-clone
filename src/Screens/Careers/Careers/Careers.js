import React from 'react';
import './Careers.css';
import HeroHeader from '../../../Components/HeroHeader/HeroHeader';
import CenteredText from '../../../Components/CenteredText/CenteredText';
import Figures from '../../../Components/Figures/Figures';
import RichText from '../../../Components/RichText/RichText';
import TeaserList from '../../../Components/TeaserList/TeaserList';
import Accordion from '../../../Components/Accordion/Accordion';
import RelatedContent from '../../../Components/RelatedContent/RelatedContent';
import Cards from '../../../Components/Cards/Cards';
function Careers() {
	return (
		<section id="careers">
			<div>
				<HeroHeader data={data?.heroHeader} />
			</div>
			<div>
				<CenteredText data={data?.centeredText1} />
			</div>
			<div>
				<Figures data={data?.richText} />
			</div>
			<div>
				<RichText data={data?.richText1} />
			</div>
			<div>
				<RichText data={data?.richText2} />
			</div>
			<div>
				<Cards data={data?.cards} />
			</div>
			<div>
				<TeaserList data={data.teaserList} />
			</div>
			<div>
				<CenteredText data={data?.centeredText2} />
			</div>
			<div>
				<Accordion data={data?.accordion1} />
			</div>
			<div>
				<Accordion data={data?.accordion2} />
			</div>
			<div>
				<Accordion data={data?.accordion3} />
			</div>
			<div>
				<Accordion data={data?.accordion4} />
			</div>
			<div>
				<RelatedContent data={data?.relatedContent} />
			</div>
		</section>
	);
}

export default Careers;
const data = {
	heroHeader: {
		title: {
			text: 'Careers',
			style: { color: 'white' },
		},
		content: {
			text: 'Be a part of the tech company that’s a part of everything',
			style: { color: 'white' },
		},
		style: {
			background:
				'linear-gradient(to right,rgba(47, 48, 70, 1) -30%,rgba(41, 100, 100, 0) 120%),url(https://www.asml.com/-/media/asml/images/careers/01-hero-images/careers.jpg?mw=1920&rev=2365b9f206b5489d939222836ec7c27b&hash=64C0D97718E4A8DA6C92B7E64A268F5D)',
			height: '1020px',
		},
	},
	centeredText1: {
		style: {},
		content: {
			text: 'Technology is a force for good. It connects us and changes how we live, work, and play. At the heart of it all is ASML. Most of the electronic devices you use daily are only possible because of our lithography systems.',
			style: {
				fontSize: '36px',
				fontWeight: '300',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: '#0F238C',
			},
		},
		link: {
			text: 'More about working at ASML',
			url: '/',
			style: { color: '#0F238C' },
		},
	},
	centeredText2: {
		style: {},
		content: {
			text: 'Read our most frequently asked questions about applying for a job at ASML.',
			style: {
				fontSize: '36px',
				fontWeight: '300',
				lineHeight: '36px',
				letterSpacing: '-1px',
				color: '#0F238C',
			},
		},
	},
	richText1: {
		style: { backgroundColor: 'white' },
		title: {
			text: 'Job categories',
			style: {
				color: '#0F238C',
				fontSize: '48px',
				fontWeight: '700',
				lineHeight: '48px',
				letterSpacing: '-1px',
			},
		},
		content: {
			text: [
				"Working at ASML is unlike working at any other company - even other high-tech companies. It's more extreme and more inspiring, no matter the field you're in.",
				'That’s because we push the boundaries of what’s physically possible. Every field of technology stretched to its limits and beyond.',
			],
			style: { fontSize: '28px', fontWeight: '300', color: '#555464' },
		},
		link: {
			text: 'See all job categories',
			url: '/',
			style: { color: '#1287e4' },
		},
	},
	richText2: {
		style: { backgroundColor: 'white' },
		title: {
			text: 'Students and graduates',
			style: {
				color: '#0F238C',
				fontSize: '48px',
				fontWeight: '700',
				lineHeight: '48px',
				letterSpacing: '-1px',
			},
		},
		content: {
			text: [
				'ASML offers opportunities for students and graduates in practically every technical field.',
				'Our engineers develop skills that pave the way for rapid professional and personal growth, as well as a promising future solving complex problems.',
			],
			style: { fontSize: '28px', fontWeight: '300', color: '#555464' },
		},
	},
	cards: {
		style: { backgroundColor: 'white' },
		cards: [
			{
				title: { text: 'Internships', style: { color: '#0f238c' } },
				content: {
					text: 'Explore our internships, co-op programs and graduation assignments for students in the Netherlands and the United States.',
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/students-and-graduates/internships/46537-internships.jpg?mw=525&rev=4c15fcad061e4606874f2efabf2476d9&hash=DD45A836F6F0C21455E7BAFCA0BE6729',
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Scholarships', style: { color: '#0f238c' } },
				content: {
					text: 'Get support for your future – see the available scholarships in the Netherlands and the US.',
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/students-and-graduates/scholarships/46706-scholarship.jpg?mw=525&rev=701073ddabfe4095bccebcfa10268029&hash=D05EAC763EF123FFEF8C96F1E0B7CFB9',
				},
				link: { url: '/' },
			},
			{
				title: { text: 'PhD events', style: { color: '#0f238c' } },
				content: {
					text: 'Explore our career events and workshops for PhD students and graduates in the Netherlands and the US.',
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/students-and-graduates/phd/46470-phd-events.jpg?mw=525&rev=41e10e8491d14087b4a17322b7c23f13&hash=0E1829829327B93788954059046DC73C',
				},
				link: { url: '/' },
			},
			{
				title: { text: 'Career events', style: { color: '#0f238c' } },
				content: {
					text: 'Learn about our career events held around the world, where you get to know ASML as an employer.',
				},
				image: {
					url: 'https://www.asml.com/-/media/asml/images/careers/career-events/tech-talk.jpg?mw=525&rev=894ccc0793884ddb8493d5e1e1629822&hash=FA78EB35B49C20480B92E0C1688811F4',
				},
				link: { url: '/' },
			},
		],
	},
	teaserList: {
		style: {},
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
	accordion1: {
		header: 'Applying for a job at ASML',
		items: [
			{
				id: 1,
				title: { text: 'How do I apply for a job at ASML?' },
				content: {
					text: 'Use the ASML job search to find a position that matches your skill set. Click the "Apply now" button on any open job listing at ASML, which will direct you to the ASML career portal. From there, you can fill out the form and submit your application. We are unable to accept job applications submitted any other way, such as via email.',
				},
			},
			{
				id: 2,
				title: { text: 'Who will review my job application?' },
				content: {
					text: 'A recruitment specialist in the department of the open position will review your resume and cover letter.',
				},
			},
			{
				id: 3,
				title: {
					text: 'When will I hear back after I apply for a job at ASML?',
				},
				content: {
					text: 'An ASML recruiter will contact you within two weeks if we have questions about your application or if we would like to schedule an interview.',
				},
			},
			{
				id: 4,
				title: {
					text: 'Until when can I apply for a job listing that does not have an expiration date?',
				},
				content: {
					text: 'We encourage you to apply as soon as possible, as the job listing expiration date depends on the number of qualified applicants.',
				},
			},
			{
				id: 5,
				title: { text: 'Can I apply for more than one job at ASML?' },
				content: {
					text: 'Yes, but we encourage you to only apply for jobs that match your background and experience. If you are invited for the second round of interviews for both positions, you will need to choose with which position you would like to proceed.',
				},
			},
			{
				id: 6,
				title: { text: 'What is the status of my job application?' },
				content: {
					text: 'After you have filled out the online application for a job at ASML, you will see an option to create a personal profile in the career portal. After creating a profile, you can log in and view the status of your job application.',
				},
			},
			{
				id: 7,
				title: {
					text: 'What does it mean if my application status is "closed"?',
				},
				content: {
					text: 'If your application status appears as "closed", it means that you were not selected to proceed to the next step of the hiring process. We encourage you to search for a job at ASML that matches your skill set and apply again.',
				},
			},
			{
				id: 8,
				title: { text: 'What is the main language spoken at ASML?' },
				content: {
					text: 'Our company’s main language is English. We are proudly culturally diverse, with 120 different nationalities working together as one.',
				},
			},
			{
				id: 9,
				title: { text: 'Can I visit ASML before I apply for a job?' },
				content: {
					text: 'ASML organizes several events each year for students and professionals that take place at our various locations around the world. Check out our career events to find an event that matches your interests.',
				},
			},
		],
	},
	accordion2: {
		header: 'ASML interview process',
		items: [
			{
				id: 1,
				title: { text: 'What is the ASML interview process like?' },
				content: {
					text: 'The ASML interview process will vary depending on the job you are applying for as well as which country you are applying in. Generally, however, you may have two or more interviews for a job at ASML. The first interview, which takes place with the position’s hiring manager and a member of the team, assesses your background, skills and compatibility with the team. If you are invited for a second interview, you may be asked to complete an online assessment that should be submitted before the interview takes place. The second interview takes place with a project leader, architect or different team member. You may also be invited to a third interview with the human resources (HR) department. If all interviews are successful, you will then receive a job offer from HR.',
				},
			},
			{
				id: 2,
				title: { text: 'When will I receive an invitation for my interview?' },
				content: {
					text: 'The ASML recruitment department will send you an email that includes information about the location, date, and interviewers once the interview has been planned.',
				},
			},
			{
				id: 3,
				title: {
					text: 'I have been asked to complete an online assessment for the job I have applied for. How much time do I have to complete it?',
				},
				content: {
					text: 'Once you have received the online assessment, we encourage you to complete it within three days. Please make sure you have completed the assessment before your interview.',
				},
			},
			{
				id: 4,
				title: { text: 'When will I hear back after my interview?' },
				content: {
					text: 'It depends on the country in which you are applying for a job, but you should generally receive feedback within five working days.',
				},
			},
			{
				id: 5,
				title: {
					text: 'I did not receive a QR code or online meeting link for my interview.',
				},
				content: {
					text: 'Please contact the recruiter that sent you the interview confirmation.',
				},
			},
		],
	},
	accordion3: {
		header: 'Working at ASML',
		items: [
			{
				id: 1,
				title: {
					text: 'Does ASML offer relocation support?',
				},
				content: {
					text: "If you are an 'international local hire' – in other words, you were hired to work in a different country or state than where you currently live – ASML will support the relocation of you and your direct family members (spouse and children). ASML will provide support for immigration, travel, shipping personal belongings, cultural awareness and language training, and tax advice.",
				},
			},
			{
				id: 2,
				title: {
					text: 'Can you help my spouse in finding a job as well?',
				},
				content: {
					text: 'If your spouse is a good fit for another ASML vacancy, you can both join the ASML referral program.',
				},
			},
			{
				id: 3,
				title: {
					text: 'Does ASML help with continued learning and development?',
				},
				content: {
					text: 'We support lifelong learning for all employees, individually and collectively, across the globe. We do so by offering an appropriate blend of training, on-the-job learning experience and facilitating meaningful connections and collaboration through all parts and layers of the organization. Together with managers who support and Learning & Development that enables, employees are empowered to continuously drive their own development so as to optimally support our business and customers. Our offering covers development in the area of technical skills development, as well as in the area of soft skills and (personal) leadership development.',
				},
			},
			{
				id: 4,
				title: {
					text: 'Does ASML offer remote jobs?',
				},
				content: {
					text: 'Given the COVID-19 pandemic, our employees are currently working primarily from home. In normal circumstances, most employees work onsite. We believe that we share knowledge, innovate and collaborate best when meeting in person, but we recognize that some tasks can be done just as effectively outside the office. ASML’s work-from-home guidelines blend office and remote working, as we believe both have benefits for individuals, the business and the environment.Working from abroad is generally not permissible due to tax, social security and other implications for both the employee and ASML.',
				},
			},
		],
	},
	accordion4: {
		header: 'Privacy',
		items: [
			{
				id: 1,
				title: {
					text: 'How does ASML use my personal data?',
				},
				content: {
					text: 'We are committed to respecting and protecting the privacy of our candidates. Any personal data we receive is managed in a professional, lawful and ethical way, in line with our Code of Conduct and in compliance with applicable laws and regulations. Please read our privacy policy for job applicants.',
				},
			},
			{
				id: 2,
				title: {
					text: 'How long will ASML keep my personal data?',
				},
				content: {
					text: 'Your data is kept only for the period required for recruitment and compliance purposes. Please read more about how long we keep personal data in our privacy notice for job applicants.',
				},
			},
			{
				id: 3,
				title: {
					text: 'How can I request that my personal data be deleted?',
				},
				content: {
					text: 'You will need to contact the Privacy Office to have your personal data deleted. Please read more about this process in our privacy notice for job applicants.',
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
				span: 2,
				offset: 2,
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
