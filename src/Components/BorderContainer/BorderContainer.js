import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BorderContainer.css';

function BorderContainer() {
	return (
		<Container fluid className="borderContainer fluid__container">
			<Row className="borderContainer__row">
				<Col
					xl={2}
					md={2}
					sm={6}
					xs={6}
					className="borderContainer__col p-0 "
				/>
				<Col
					xl={2}
					md={4}
					sm={6}
					xs={6}
					className="borderContainer__col p-0 "
				/>
				<Col
					xl={2}
					md={4}
					sm={2}
					xs={0}
					className="borderContainer__col p-0   d-none d-xl-block d-md-block"
				/>
				<Col
					xl={2}
					md={2}
					sm={2}
					xs={0}
					className="borderContainer__col p-0 d-none d-xl-block d-md-block"
				/>
				<Col xl={2} className="borderContainer__col p-0 d-none d-xl-block" />
				<Col xl={2} className="borderContainer__col p-0 d-none d-xl-block" />
			</Row>
		</Container>
	);
}

export default BorderContainer;
