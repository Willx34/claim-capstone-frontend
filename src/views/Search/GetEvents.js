/* eslint-disable no-unused-vars */
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import { useHistory } from "react-router-dom";
import { Dateformatter } from "./DateFormatter";

const useStyles = makeStyles({
	root: {
		width: 300,
		height: 300,
		margin: "5px",
		position: "relative",
		border: "2",
		backgroundColor: "#fcfcfc",
	},
	media: {
		height: 160,
		position: "relative",
	},
	cardFooter: {
		position: "absolute",
		bottom: "0",
		left: "0",
		padding: "2px",
	},
	icon: {
		paddingBottom: "3px",
		fontSize: "13px",
	},
	badge: {
		bottom: "0",
		right: "0px",
		position: "absolute",
		padding: "0px",
		margin: "0px",
	},
	truncate: {
		width: "280px",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
});

const getResults = async (user) => {
	getResults.propTypes = {
		user: PropTypes.object,
	};

	try {
		const response = await axios.post("http://localhost:8080/findEventByUser", user);
		console.log("Returned the following from /findEventByUser API:", response.data);
		localStorage.removeItem("results");
		const results = await getDetails(response.data);
		console.log("Returned the following result details: ", results);
		localStorage.setItem("results", JSON.stringify(results));
		return results;
	} catch (error) {
		console.log("Error with /search API call.");
	}
};

async function getDetails(results) {
	console.log("Here are the events received from getDetails: ", results);
	for (var i = 0; i < results.length; i++) {
		console.log("Here is an event in the for loop: ", results[i].businessId);
		let business = await businessDetail(results[i].businessId);
		console.log("this is a business in for loop to add to event", business);
		results[i].business = business;
	}
	return results;
}

async function businessDetail(businessId) {
	businessDetail.propTypes = {
		businessId: PropTypes.string,
	};
	console.log("Searching for business detail in for loop using : " + businessId);

	try {
		const response = await axios.post("http://localhost:8080/searchByIdInternal", { id: businessId });
		let business = response.data;
		return business;
	} catch (error) {
		console.log("Error with /searchById API generating event cards.");
	}
}

function CreateCards() {
	let getState = JSON.parse(localStorage.getItem("results"));

	const [results, setResults] = useState(getState);

	const classes = useStyles();
	const history = useHistory();

	async function deleteEvent({ event }) {
		deleteEvent.propTypes = {
			event: PropTypes.object,
		};
		console.log("deleteEvent function received the following event : " + event);

		try {
			const response = await axios.post("http://localhost:8080/deleteEvent", { eventId: event.eventId });
			const results = JSON.parse(localStorage.getItem("results"));
			var i = 0;
			while (i < results.length) {
				console.log("Event in for loop of delete function:", results[i]);
				console.log(results[i].eventId === event.eventId);
				if (results[i].eventId === event.eventId) {
					console.log("Deleted from storage: ", results[i]);
					results.splice(i, 1);
				} else {
					i++;
				}
			}
			localStorage.setItem("results", JSON.stringify(results));
			setResults(results);
			console.log("deleted " + event.eventId);
		} catch (error) {
			console.log("Error with /deleteEvent");
		}
	}

	async function eventDetail({ event }) {
		eventDetail.propTypes = {
			event: PropTypes.object,
		};

		let params = {
			id: event.business.id,
		};

		try {
			const response = await axios.get("http://localhost:8080/searchById", { params });
			console.log("Returned the following from /searchById API:", response.data);
			history.push({ pathname: "/business", state: { business: response.data } });
		} catch (error) {
			console.log("Error with /search API call.");
		}
	}

	if (Array.isArray(results)) {
		return results.map((event) => {
			return (
				<Card className={classes.root} key={event.eventId} variant="outlined">
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image={event.business.imageUrl}
							title={event.business.name}
						></CardMedia>
						<CardContent>
							<Typography className={classes.truncate} variant="h6" component="h2">
								{event.business.name}
							</Typography>

							<Typography variant="body2" color="textSecondary" component="p">
								<Dateformatter date={event.scheduledDate} />
								<br />
								Party of {event.attendeeCount}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<CardFooter className={classes.cardFooter}>
							<Button size="sm" onClick={() => eventDetail({ event })} color="primary">
								Details
							</Button>
							<Button size="sm" onClick={() => deleteEvent({ event })} color="danger">
								Remove
							</Button>
						</CardFooter>
					</CardActions>
				</Card>
			);
		});
	} else {
		setTimeout(() => {
			setResults(getState);
		}, 100);
	}
	return <div></div>;
}
export { CreateCards, getResults };
