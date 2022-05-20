import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Accordion.scss';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

function Accordion({ data }) {
	const [selected, setSelected] = useState(null);
	const toggle = (i) => {
		if (selected == i) {
			return setSelected(null);
		}
		setSelected(i);
	};
	return (
		<Container fluid className="accordion__container fluid__container">
			<Row className="accordion__row py-5">
				<Col className="p-0 accordion__col col-12 offset-md-2 col-md-8">
					<p className="accordion__title">{data?.header}</p>
					{data?.items?.map((item) => {
						const { id, title, content } = item;
						return (
							<div key={id} className="accordion__item">
								<div
									onClick={() => toggle(id)}
									key={id}
									className="accordion__top"
								>
									<span style={title?.style}>{title?.text}</span>

									<FaChevronDown
										size={25}
										className="accordion__chevron"
										id={
											selected == id
												? 'accordion__chevronDown'
												: 'accordion__chevronUp'
										}
									/>
								</div>
								<div
									style={content?.style}
									id={selected == id && 'accordion__contentOpen'}
									className="accordion__bottom"
								>
									{content?.text}
								</div>
							</div>
						);
					})}
				</Col>
			</Row>
		</Container>
	);
}

export default Accordion;
