import React from "react";
import ReactModal from "react-modal";
import { Icon } from "semantic-ui-react";

import { getStatusLabel, getFormattedDate } from "../utils/index";

ReactModal.setAppElement("#root");
function Modal({ modalStatus, handleClose, launch }) {
	return (
		<ReactModal
			style={{
				overlay: {
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: "rgba(192,192,192,0.6)",
					zIndex: 1000,
				},
				content: {
					position: "absolute",
					left: "50%",
					transform: "translateX(-50%)",
					border: "1px solid #ccc",
					background: "#fff",
					overflow: "auto",
					WebkitOverflowScrolling: "touch",
					borderRadius: "6px",
					outline: "none",
					width: "800px",
					maxHeight: "400px",
					padding: "0px !important",
					margin: "0 auto",
				},
			}}
			isOpen={modalStatus}
			onRequestClose={handleClose}
		>
			<div className="modal-container">
				<div className="modal-header">
					<p className="mission-heading">
						Capsule No. {launch.capsule_serial}
					</p>
					<button onClick={handleClose}>X</button>
				</div>
				<div className="row">
					
					<div className="col">
						<h2>
							<span className="field-name">Mission</span>
							{launch && launch.mission && launch.mission[0].name || 'No Mission Specified'}
						</h2>
					
					</div>
					<div className="col">
						<h2>
							<span className="field-name">Date </span>
							{getFormattedDate(launch.original_launch)}
						</h2>
						<h3>
							<span className="field-name">Status </span>
							{getStatusLabel(launch.status)}
						</h3>
					</div>
				</div>
				<p className="launch-description">{launch.details}</p>
			
				
			</div>
		</ReactModal>
	);
}

export default Modal;
