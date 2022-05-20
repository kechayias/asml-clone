import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './SidebarMenu.scss';
import { FirstLevel, SecondLevel, ThirdLevel } from './sidebarOptions.js';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { MdArrowBack } from 'react-icons/md';

function SidebarMenu({ disableSidebarMenu }) {
	const [secondLevel, setSecondLevel] = useState('');
	const [thirdLevel, setThirdLevel] = useState('');
	const [searchText, setSearchText] = useState('');

	const secondLevelHandler = (id) => {
		setSecondLevel(SecondLevel.find((item) => item?.parent == id));
	};
	const thirdLevelHandler = (id) => {
		setThirdLevel(ThirdLevel.find((item) => item?.parent == id));
	};
	return (
		<Container fluid className="sidebarMenu fluid__container ">
			<Row className="sidebarMenu__row ">
				<Col className="sidebarMenu__col col-xl-2 col-md-4 offset-md-2 offset-xl-0 px-0">
					{FirstLevel.main?.map((item) => {
						const { id, title, link, extend } = item;
						return (
							<NavLink
								style={() => ({
									textDecoration: secondLevel?.parent == id && 'underline',
									textDecorationThickness: secondLevel?.parent == id && '1px',
									fontSize: '44px',
									fontWeight: ' 700',
									width: 'fit-content',
									lineHeight: '44px',
									letterSpacing: '-1px',
								})}
								to={link}
								key={id}
								exact
								onClick={(e) => {
									setThirdLevel('');
									//disable the rootes
									if (extend) {
										e.preventDefault();
										secondLevelHandler(id);
									} else {
										disableSidebarMenu();
									}
								}}
							>
								{title}
							</NavLink>
						);
					})}
					<div className="search__container">
						<input
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
							required
							placeholder="Search for..."
						/>
						{searchText ? (
							<IoMdClose
								onClick={() => setSearchText('')}
								className="search__icon"
							/>
						) : (
							<AiOutlineSearch className="search__icon" />
						)}
					</div>
					{FirstLevel?.secondary?.map((item) => {
						const { id, title, link } = item;
						return (
							<NavLink
								style={{
									fontSize: '25px',
									fontWeight: '200',
								}}
								to={link}
								key={id}
								exact
								onClick={() => disableSidebarMenu()}
							>
								{title}
							</NavLink>
						);
					})}
				</Col>
				{secondLevel && (
					<Col
						id="sidebarMenu__Col"
						className="sidebarMenu__col col-xl-2 col-md-4  offset-xl-0"
					>
						<div className="sidebarMenu__backButton">
							{!thirdLevel && (
								<button onClick={() => setSecondLevel('')}>
									<MdArrowBack />
									Back
								</button>
							)}
						</div>
						{secondLevel?.list?.map((option, index) => {
							const { id, title, link, extend } = option;
							return (
								<NavLink
									style={() => ({
										textDecoration: thirdLevel?.parent == id && 'underline',
										textDecorationThickness: thirdLevel?.parent == id && '1px',
										fontSize: '24px',
										fontWeight: '200',
										width: 'fit-content',
										lineHeight: '31px',
									})}
									to={link}
									key={index}
									onClick={(e) => {
										if (extend) {
											e.preventDefault();
											thirdLevelHandler(id);
										} else {
											disableSidebarMenu();
										}
									}}
								>
									{title}
								</NavLink>
							);
						})}
						{!thirdLevel && (
							<div className="sidebarMenu__extra">
								<p>{secondLevel?.extra?.description}</p>

								<NavLink
									id="customLink1"
									to={`${secondLevel?.extra?.parentPath}`}
									onClick={() => disableSidebarMenu()}
								>
									<span>{secondLevel?.extra?.parentTitle}</span>
								</NavLink>
							</div>
						)}
					</Col>
				)}
				{thirdLevel && (
					<Col
						id="sidebarMenu__Col"
						className="sidebarMenu__col  col-xl-2 col-md-2"
					>
						<div className="sidebarMenu__backButton">
							<button onClick={() => setThirdLevel('')}>
								<MdArrowBack />
								Back
							</button>
						</div>

						{thirdLevel?.list?.map((option, index) => {
							const { link, title, extend } = option;
							return (
								<NavLink
									style={{
										fontSize: '24px',
										fontWeight: '200',
										width: 'fit-content',
										lineHeight: '31px',
									}}
									to={link}
									key={index}
									onClick={(e) => {
										if (extend) {
											e.preventDefault();
										} else {
											disableSidebarMenu();
										}
									}}
								>
									{title}
								</NavLink>
							);
						})}
						<div className="sidebarMenu__extra">
							<p style={{ fontSize: '16px', fontWeight: '200' }}>
								{thirdLevel?.extra?.description}
							</p>
							<NavLink
								id="customLink1"
								to={`${thirdLevel?.extra?.parentPath}`}
								onClick={() => disableSidebarMenu()}
							>
								<span>{thirdLevel?.extra?.parentTitle}</span>
							</NavLink>
						</div>
					</Col>
				)}
				<Col className="sidebarMenu__col d-xl-block col-1 col-xl-1 d-none "></Col>
			</Row>
		</Container>
	);
}

export default SidebarMenu;
