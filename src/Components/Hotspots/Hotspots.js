import React, { useState } from 'react';
import './Hotspots.scss';
import HotspotModal from '../HotspotModal/HotspotModal.js';
import BorderContainer from '../BorderContainer/BorderContainer.js';
function Hotspots({ data }) {
	const [modal, setModal] = useState('');
	return (
		<div className="hotspots">
			<BorderContainer />
			<img
				className="hotspots__image"
				src="https://www.asml.com/-/media/asml/images/global/hotspot/map-hotspots-asml-locations.png?mw=1920&rev=9c60bed6b7c44eb5b81650275da910c9&hash=693372F88DABE7AA3C771C7993A76E2F"
			/>
			{data?.map((hostspot) => {
				const { id, title, style, modalData } = hostspot;
				return (
					<div
						onClick={() => setModal(modalData)}
						key={id}
						className="hotspots__spot"
						style={{ top: style.top, left: style.left }}
					>
						+<span className="hotspots__spotBorder" />
						<p className="hotspots__spotTitle">{title}</p>
					</div>
				);
			})}
			{modal && <HotspotModal data={modal} closeModal={() => setModal('')} />}
		</div>
	);
}

export default Hotspots;
