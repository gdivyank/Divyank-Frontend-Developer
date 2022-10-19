import React, { useState } from "react";
import { Table, Loader } from "semantic-ui-react";

import Modal from "./Modal";
import Paginate from "./Paginate";
import { getStatusLabel, getFormattedDate } from "../utils/index";

function LaunchList({
	isLoading,
	launches,
	activePage,
	setActivePage,
	launchCount,
}) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [launch, setLaunch] = useState({});
	const handleClose = () => setModalIsOpen(false);

	const handleEvents = (launch) => {
		setModalIsOpen(true);
		setLaunch(launch);
	};

	return (
		<>
			{modalIsOpen ? (
				<Modal
					modalStatus={modalIsOpen}
					handleClose={handleClose}
					launch={launch}
				/>
			) : (
				""
			)}
			{!isLoading ? (
				<>
					<div className="table-container">
						{launches.length ? (
							<Table celled color="black" textAlign="center">
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell className="table-heading-small">
											Capsule No.
										</Table.HeaderCell>
										<Table.HeaderCell className="table-heading">
											Details
										</Table.HeaderCell>
										<Table.HeaderCell>
											Type
										</Table.HeaderCell>
										<Table.HeaderCell>
											Mission Name
										</Table.HeaderCell>
										<Table.HeaderCell>
											lauched (UTC)
										</Table.HeaderCell>
										<Table.HeaderCell>
											Status
										</Table.HeaderCell>
									</Table.Row>
								</Table.Header>

								<Table.Body>
									{launches.map((launch) => {
										return (
											<Table.Row
												key={launch.capsule_serial}
												onClick={() =>
													handleEvents(launch)
												}
											>
												<Table.Cell>
													{launch.capsule_serial}
												</Table.Cell>
												
												<Table.Cell>
													{launch.details}
												</Table.Cell>
												<Table.Cell>
													{launch.type}
												</Table.Cell>
												<Table.Cell>
												
													{launch && launch.missions && launch.missions[0] ? launch.missions[0].name : ''}
													
												</Table.Cell>
												

												<Table.Cell>
													{getFormattedDate(
														launch.original_launch
													)}
												</Table.Cell>
												<Table.Cell>
													{getStatusLabel(
														launch.status
													)}
												</Table.Cell>
											</Table.Row>
										);
									})}
								</Table.Body>
							</Table>
						) : (
							<div className="center-image">
								<img
									src="https://cdn3.vectorstock.com/i/1000x1000/60/27/rocket-missile-crashed-error-not-found-concept-vector-18916027.jpg"
									alt="404"
									width="600"
									height="500"
								/>
							</div>
						)}
					</div>
					<Paginate
						activePage={activePage}
						setActivePage={setActivePage}
						launchCount={launchCount}
					/>
				</>
			) : (
				<div className="table-container">
					<Loader active inverted inline="centered" size="big" />
				</div>
			)}
		</>
	);
}

export default LaunchList;
