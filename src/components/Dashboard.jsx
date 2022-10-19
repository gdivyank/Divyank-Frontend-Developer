import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";

import FilterByTimeline from "./FilterByTimeline";
import FilterByDate from "./FilterByDate";
import FilterByStatus from "./FilterByStatus";
import FilterByType from "./FilterByType";
import LaunchList from "./LaunchList";

import { generateSearchTerm } from "../utils/index";

function Dashboard({ props }) {
	let urlTimeline;
	let urlStatus;
	let urlOriginalLaunchDate;
	let urlType;
	urlTimeline = props.location.pathname.substring(1) || "";
	


	const [launches, setlaunches] = useState([]);

	const [status, setStatus] = useState(urlStatus);
	const [type, setType] = useState(urlType);

	const [activePage, setActivePage] = useState(1);
	const [launchCount, setLaunchCount] = useState("");
	const [isLoading, setIsLoading] = useState(Boolean);

	const getLaunches = async (searchTerm) => {
		try {
			setIsLoading(true);
			const res = await axios.get(
				`https://api.spacexdata.com/v3/capsules${searchTerm}`
			);
			setLaunchCount(res.headers["spacex-api-count"]);
			setlaunches(res.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const term = generateSearchTerm(
			
			status,
			type,
			activePage
			
		);
		getLaunches(term);
		props.history.push(term);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status, activePage, type]);

	return (
		<>
			<div className="dashboard-container">
				<div className="filters-container">
					{/*<FilterByTimeline*/}
					{/*	timeline={timeline}*/}
					{/*	setTimeline={setTimeline}*/}
					{/*/>*/}
					<div className="multiple-filters">
						{/*api doesnot have support for filtering start and end date for original launch */}
						{/*<FilterByDate*/}
						{/*	startDate={startDate}*/}
						{/*	setStartDate={setStartDate}*/}
						{/*/>*/}
						<FilterByStatus status={status} setStatus={setStatus} />
						<FilterByType type={type} setType={setType} />
						
					</div>
				</div>

				<LaunchList
					isLoading={isLoading}
					launches={launches}
					activePage={activePage}
					setActivePage={setActivePage}
					launchCount={launchCount}
				/>
			</div>
		</>
	);
}

export default withRouter(Dashboard);
