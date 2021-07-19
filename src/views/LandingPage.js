import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import React, { useEffect, useState } from "react";
import Footer from "views/Footer/Footer";
import Header from "views/Header/Header.js";
import { BizSearch } from "./Search/BizSearch";
import { Events } from "./Search/Events";
import { getResults } from "views/Search/GetEvents";

const useStyles = makeStyles(styles);

export default function LandingPage() {
	const classes = useStyles();

	const [inputValues, setInputValues] = useState({
		results: [],
		user: JSON.parse(localStorage.getItem("user")),
	});

	useEffect(() => {
		setUser();
		getEvents();
	}, []);

	async function getEvents() {
		const tempInput = { ...inputValues };
		tempInput.results = await getResults(inputValues.user);
		setInputValues(tempInput);
		localStorage.setItem("results", JSON.stringify(tempInput.results));
	}
	function setUser() {
		const tempInput = { ...inputValues };
		tempInput.user = JSON.parse(localStorage.getItem("user"));
		setInputValues(tempInput);
	}

	return (
		<div>
			<Header />
			<Parallax exsmall filter image={require("assets/img/bg-signup.jpg").default} />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div>
					<div className={classes.container}>
						<GridContainer justify="flex-start">
							<GridItem xs={12} sm={12} md={12} lg={12}>
								<NavPills
									color="primary"
									horizontal={{
										tabsGrid: { xs: 12, sm: 4, md: 3, lg: 2 },
										contentGrid: { xs: 12, sm: 8, md: 9, lg: 10 },
									}}
									tabs={[
										{
											tabButton: "Restaurants",
											tabIcon: Dashboard,
											tabContent: <BizSearch />,
										},
										{
											tabButton: "Schedule",
											tabIcon: Schedule,
											tabContent: <Events />,
										},
									]}
								/>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
