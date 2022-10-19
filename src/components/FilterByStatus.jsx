import React from "react";
import { Dropdown } from "semantic-ui-react";

const launchStatuses = [
	
	{
		key: "Retired",
		text: "Retired",
		value: 'retired',
	},
	{
		key: "Active",
		text: "Active",
		value: 'active',
	},
	{
		key: "Unknown",
		text: "Unknown",
		value: 'unknown',
	},
];

function FilterByStatus({ status, setStatus }) {
	const handleChange = (e, { value }) => {
		setStatus(value);
	};
	return (
		<div className="status-filter">
			<p className="filter-name-label text-align-center">Launch Status</p>
			<Dropdown
				fluid
				selection
				value={status}
				options={launchStatuses}
				onChange={handleChange}
			/>
		</div>
	);
}

export default FilterByStatus;
