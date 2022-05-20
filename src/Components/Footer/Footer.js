import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import {
	AiFillFacebook,
	AiFillLinkedin,
	AiFillTwitterSquare,
	AiOutlineInstagram,
	AiFillYoutube,
} from 'react-icons/ai';
import { SiGlassdoor } from 'react-icons/si';

function Footer() {
	return (
		<Container fluid className="footer__container fluid__container">
			<Row className="footer__row">
				{linkList.map((column) => {
					const { id, title, links } = column;
					return (
						<Col
							key={id}
							xl={{ offset: id == 1 ? 2 : 0 }}
							md={{ offset: id == 1 || id == 3 ? 2 : 0 }}
							className="footer__col d-flex flex-column p-0 col-12 col-xl-2 col-md-4"
						>
							<p className="footer__linkTitle">{title}</p>
							{links.map((item, index) => {
								const { title, link } = item;
								return (
									<NavLink className="footer__listLink" key={index} to={link}>
										<span>{title}</span>
									</NavLink>
								);
							})}
						</Col>
					);
				})}

				<Col className="footer__col p-0  offset-xl-8 offset-md-6 offset-0">
					<p className="footer__meadiaTitle">SOCIAL MEDIA</p>
					{mediaLinkList.map((item) => {
						const { id, icon, link } = item;
						return (
							<a className="footer__mediaLink" href={link} key={id}>
								{icon}
							</a>
						);
					})}
				</Col>
			</Row>
			<Row className="footer__row ">
				<Col className="p-0 footer__col  col-12  col-xl-6 text-xl-start text-center">
					<p className="footer__copyrightText">
						Copyright © 2019-2022 (ASML) All Rights Reserved
					</p>
				</Col>
				<Col className="p-0 footer__col col-12  col-xl-6 text-xl-end text-center">
					{legalLinks.map((item) => {
						const { id, title, link } = item;
						return (
							<NavLink className="footer__legalLink" key={id} to={link}>
								{title}
							</NavLink>
						);
					})}
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;

const linkList = [
	{
		id: 1,
		title: 'LEARN',
		links: [
			{ title: 'ASML at a glance', link: '' },
			{ title: 'History', link: '' },
			{ title: 'Products', link: '' },
			{ title: 'Technology', link: '' },
			{ title: 'Sustainability', link: '' },
			{ title: 'News', link: '' },
			{ title: 'ASML Foundation', link: '' },
		],
	},
	{
		id: 2,
		title: 'WORK AT ASML',
		links: [
			{ title: 'Job search', link: '' },
			{ title: 'Careers', link: '' },
			{ title: 'Organization', link: '' },
			{ title: 'Locations', link: '' },
		],
	},
	{
		id: 3,
		title: 'INVEST',
		links: [
			{ title: 'Why invest in ASML', link: '' },
			{ title: 'Annual report', link: '' },
			{ title: 'Financial results', link: '' },
			{ title: 'Technology', link: '' },
			{ title: 'Investor days', link: '' },
			{ title: 'Shares', link: '' },
		],
	},
	{
		id: 4,
		title: 'GET IN TOUCH',
		links: [
			{ title: 'Contact information', link: '' },
			{ title: 'Contact Media Relations', link: '' },
			{ title: 'Contact Investor Relations', link: '' },
			{ title: 'CustomerNet', link: '' },
			{ title: 'SupplierNet', link: '' },
		],
	},
];

const mediaLinkList = [
	{
		id: 1,
		icon: <AiFillFacebook size={25} />,
		link: 'https://www.facebook.com/asml/',
	},
	{
		id: 2,
		icon: <AiFillLinkedin size={25} />,
		link: 'https://www.linkedin.com/company/asml',
	},
	{
		id: 3,
		icon: <AiFillTwitterSquare size={25} />,
		link: 'https://twitter.com/asmlcompany',
	},
	{
		id: 4,
		icon: <AiFillYoutube size={25} />,
		link: 'https://www.youtube.com/channel/UCIT9d3JjHEnsVi_w9guSXvA',
	},
	{
		id: 5,
		icon: <AiOutlineInstagram size={25} />,
		link: 'https://www.instagram.com/asmlcompany/',
	},
	{
		id: 6,
		icon: <SiGlassdoor size={25} />,
		link: 'https://www.glassdoor.com/Reviews/ASML-Reviews-E5781.htm',
	},
];

const legalLinks = [
	{ id: 1, title: 'Terms of use', link: '' },
	{ id: 2, title: 'Privacy', link: '' },
	{ id: 3, title: 'Cookies', link: '' },
	{ id: 4, title: 'Terms & conditions', link: '' },
];
