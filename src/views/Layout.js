import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.10.0";
import Components from "views/Theme/Components/Components.js";
import LandingPage from "views/LandingPage.js";
import Home from "views/Home.js";
import SignUp from "views/SignUp";
import BusinessDetail from "views/BusinessDetail";

export default function Layout() {
	var hist = createBrowserHistory();

	return (
		<Router history={hist}>
			<Switch>
				<Route path="/landing" render={() => <LandingPage />} />
				<Route path="/business" render={() => <BusinessDetail />} />
				<Route path="/signup" render={() => <SignUp />} />
				<Route path="/theme" component={Components} />
				<Route exact path="/" render={() => <Home />} />
			</Switch>
		</Router>
	);
}
