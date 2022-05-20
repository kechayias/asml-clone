import React, { useState, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.scss';
import logo from '../../assets/logo.png';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import { FavoriteContext } from '../../Contexts/FavoriteContext';
import { AiFillHeart } from 'react-icons/ai';

function Header() {
	const [favorites] = useContext(FavoriteContext);

	const [sidebarMenu, setSidebarMenu] = useState(false);

	return (
		<Container
			fluid
			className="header fluid__container"
			id={sidebarMenu && 'header__locked'}
		>
			<Row className="header__row align-items-center">
				<Col className="header__col p-0 col-1 col-xl-2 col-md-2 ">
					<Link className="" to="/">
						<img className="header__logo" src={logo} />
					</Link>
				</Col>

				<Col className="p-0 header__col  offset-md-0 d-flex  flex-md-row flex-row-reverse align-items-center justify-content-md-between">
					{sidebarMenu ? (
						<IoMdClose
							onClick={() => setSidebarMenu(false)}
							size={45}
							color="white"
							style={{ cursor: 'pointer', marginLeft: '-5px' }}
						/>
					) : (
						<HiMenu
							onClick={() => setSidebarMenu(true)}
							color="white"
							size={45}
							style={{ cursor: 'pointer', marginLeft: '-5px' }}
						/>
					)}
					{favorites.length > 0 && (
						<Link to="/saved-jobs">
							<AiFillHeart
								color="white"
								size={25}
								style={{ marginRight: '5px' }}
							/>

							<span
								className="d-none d-md-inline"
								style={{ marginLeft: '10px', color: 'white' }}
							>
								Saved jobs
							</span>
						</Link>
					)}
				</Col>
			</Row>
			{sidebarMenu && (
				<SidebarMenu disableSidebarMenu={() => setSidebarMenu(false)} />
			)}
		</Container>
	);
}

export default Header;
