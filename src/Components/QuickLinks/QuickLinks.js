import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsHouse } from 'react-icons/bs';
import { MdBiotech } from 'react-icons/md';
import { BiLineChart } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import './QuickLinks.css';

function QuickLinks() {
	return (
		<Row className="quickLinks__row">
			<Col xl={{ offset: 2, span: 8 }} className="p-0 quickLinks__col">
				<h5>QUICK LINKS</h5>
				<hr />
			</Col>
			{quickLinks.map((item) => {
				const { id, title, icon, link } = item;
				return (
					<Col
						key={id}
						className="p-0 quickLinks__col"
						xl={{ offset: id == 1 && 2, span: 2 }}
					>
						<NavLink
							key={id}
							style={{ color: 'white', textDecoration: 'none' }}
							to={link}
						>
							{icon}
							<p>{title}</p>
						</NavLink>
					</Col>
				);
			})}
		</Row>
	);
}

export default QuickLinks;

const quickLinks = [
	{
		id: 1,
		title: 'About ASML',
		icon: <BsHouse size={25} />,
		link: '/company',
	},

	{
		id: 2,
		title: 'Careers',
		icon: <AiOutlineSearch size={25} />,
		link: '/company',
	},
	{
		id: 3,
		title: 'Technology',
		icon: <MdBiotech size={25} />,
		link: '/company',
	},
	{
		id: 4,
		title: 'Investors',
		icon: <BiLineChart size={25} />,
		link: '/company',
	},
];
