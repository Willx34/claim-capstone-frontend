/* eslint-disable no-unused-vars */
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/businessPage.js";
import GridItem from "components/Grid/GridItem.js";
import React, { useState } from "react";
import { Typography, Icon } from "@material-ui/core";
import PropTypes from "prop-types";
import GridContainer from "components/Grid/GridContainer.js";
import EventIcon from "@material-ui/icons/Event";
import Button from "components/CustomButtons/Button.js";
import EditIcon from "@material-ui/icons/Edit";
import Quote from "components/Typography/Quote.js";
import image from "assets/img/of.jpg";

const useStyles = makeStyles(styles);

export default function BizEvents({ id }) {
	BizEvents.propTypes = {
		id: PropTypes.string,
	};

	let getEvents = refreshState(JSON.parse(localStorage.getItem("results")));

	function refreshState(results) {
		const tempEvents = [];
		for (var i = 0; i < results.length; i++) {
			if (results[i].businessId === id) tempEvents.push(results[i]);
		}
		console.log("Returning these events from refreshState: ", tempEvents);
		return tempEvents;
	}

	const [events, setEvents] = useState(getEvents);

	const classes = useStyles();

	if (Array.isArray(events)) {
		return events.map((event) => {
			return (
				<GridContainer justify="flex-start" key={event.eventId} className={classes.review}>
					<GridItem xs={2} sm={2} md={2} lg={2}>
						<img
							src={image}
							alt="..."
							className={classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid}
						/>
					</GridItem>
					<GridItem xs={9} sm={9} md={9} lg={9}>
						<Quote
							text="Had a great time here with Brian. Really good cocktails, should come back soon."
							author="Will Mihill - June 20, 2021 (Feature not yet implemented)"
						/>
					</GridItem>
					<GridItem
						xs={1}
						sm={1}
						md={1}
						lg={1}
						className={classes.icon}
						style={{ paddingTop: "6px", marginLeft: "-30px", overflow: "visible" }}
					>
						<Button justIcon round color="primary" size="lg">
							<EditIcon />
						</Button>
					</GridItem>
				</GridContainer>
			);
		});
	} else {
		setTimeout(() => {
			refreshState(JSON.parse(localStorage.getItem("results")));
		}, 100);
	}
}
