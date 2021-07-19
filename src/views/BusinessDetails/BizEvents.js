/* eslint-disable no-unused-vars */
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/businessPage.js";
import GridItem from "components/Grid/GridItem.js";
import React, { useState } from "react";
import { Typography, Icon } from "@material-ui/core";
import PropTypes from "prop-types";
import { Dateformatter } from "views/Search/DateFormatter";
import GridContainer from "components/Grid/GridContainer.js";
import EventIcon from "@material-ui/icons/Event";
import Button from "components/CustomButtons/Button.js";
import PostAddIcon from "@material-ui/icons/PostAdd";

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
					<GridItem xs={3} sm={3} md={3} lg={3} className={classes.icon}>
						<Icon style={{ display: "flex", paddingTop: "25px", overflow: "visible", color: "#333333" }}>
							<EventIcon fontSize="large" />
						</Icon>
					</GridItem>
					<GridItem xs={6} sm={6} md={6} lg={6}>
						<Typography variant="h6" component="p">
							{event.business.name}
						</Typography>
						<Typography variant="body1" component="p">
							<Dateformatter date={event.scheduledDate} /> <br />
							Party of {event.attendeeCount}
						</Typography>
					</GridItem>
					<GridItem
						xs={3}
						sm={3}
						md={3}
						lg={3}
						className={classes.icon}
						style={{ paddingTop: "6px", overflow: "visible" }}
					>
						<Button justIcon round color="primary" size="lg">
							<PostAddIcon />
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
