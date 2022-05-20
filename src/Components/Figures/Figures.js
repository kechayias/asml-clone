import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Figures.scss';
import {
	MdFoundation,
	MdPeopleOutline,
	MdOutlineAddLocation,
} from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';

function Figures({ data }) {
	return (
		<Container
			fluid
			className="figures__container fluid__container"
			style={data?.style}
		>
			<Row className="figures__row py-5">
				<Col className="col-12 p-0 col-xl-10 offset-xl-2 ">
					<p style={data?.title?.style}>{data?.title?.text}</p>
				</Col>
				<Col className="p-0 col-12 offset-xl-2 col-xl-2 offset-md-2  col-md-4 ">
					<MdFoundation size={65} style={{ color: '#0f238c' }} />
					<div className="figureCounter__container">
						<span
							className="figureCounter__firstNumberYF box"
							style={{ '--number': '1984' }}
						></span>
					</div>
					<p className="figure__title">Year founded</p>
				</Col>
				<Col className="col-12 col-xl-2   col-md-6 p-0 ">
					<MdPeopleOutline size={65} style={{ color: '#0f238c' }} />
					<div className="figureCounter__container">
						<span
							className="figureCounter__firstNumberYF box"
							style={{ '--number': '32016' }}
						></span>
					</div>
					<p className="figure__title">Total employees (in FTE)</p>
				</Col>
				<Col className="p-0 col-12 offset-xl-0  col-xl-2 offset-md-2 col-md-4">
					<BiWorld size={65} style={{ color: '#0f238c' }} />
					<div className="figureCounter__container">
						<span
							className="figureCounter__firstNumberYF box"
							style={{ '--number': 122 }}
						></span>
					</div>
					<p className="figure__title">Nationalities</p>
				</Col>
				<Col className="p-0 col-12 col-xl-2  col-md-6">
					<MdOutlineAddLocation size={65} style={{ color: '#0f238c' }} />
					<div className="figureCounter__container">
						<span
							className="figureCounter__firstNumberYF box"
							style={{ '--number': 60 }}
						></span>
					</div>
					<p className="figure__title">Locations</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Figures;
