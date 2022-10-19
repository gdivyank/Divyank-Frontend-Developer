import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FilterByDate({ startDate, setStartDate }) {
	return (
		<div className="date-filter">
			<div className="text-align-center date-box">
				<p className="filter-name-label ">Original Launch Date</p>
				<DatePicker
					selected={startDate}
					selectsStart
					isClearable
					dateFormat="yyyy/MM/dd"
					showYearDropdown
					showMonthDropdown
					onChange={(date) => setStartDate(date)}
					placeholderText="Start Date"
				/>
			</div>
		
		</div>
	);
}

export default FilterByDate;
