import React from "react";
import { withRouter } from "react-router";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Podium from "./components/Podium";



function App(props) {
	return (
		<div className="App" id="fonts">
			<div className="main-container">
				<Navbar />

				<Podium />
				<Dashboard props={props} />
			</div>
		</div>
	);
}

export default withRouter(App);
