import React from "react";
import { Dropdown } from "semantic-ui-react";

const launchStatuses = [
	{
		key: "Dragon 1.0",
		text: "Dragon 1.0 ",
		value: "Dragon 1.0",
	},
	{
		key: "Dragon 1.1",
		text: "Dragon 1.1 ",
		value: "Dragon 1.1",
	},
	{
		key: "Dragon 2.0",
		text: "Dragon 2.0 ",
		value: "Dragon 2.0",
	},
	
];

function FilterByType({ type, setType }) {
	const handleChange = (e, { value }) => {
		setType(value);
	};
	return (
		<div className="status-filter">
			<p className="filter-name-label text-align-center">Capsule Type</p>
			<Dropdown
				fluid
				selection
				value={type}
				options={launchStatuses}
				onChange={handleChange}
			/>
		</div>
	);
}

export default FilterByType;
