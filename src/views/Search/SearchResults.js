/* eslint-disable no-unused-vars */
import Button from "components/CustomButtons/Button.js";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import CardFooter from "components/Card/CardFooter.js";
import CreateEventModal from "views/Event/CreateEventModal";
import Badge from "components/Badge/Badge.js";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { useHistory } from "react-router-dom";

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

const getResults = async (searchTerm, location) => {
	getResults.propTypes = {
		searchTerm: PropTypes.string,
		location: PropTypes.string,
	};

	let params = {
		searchTerm: searchTerm,
		location: location,
		categories: "food",
	};

	try {
		const response = await axios.get("http://localhost:8080/search", { params });
		console.log("Returned the following from /search API:", response.data);
		return response.data.businesses;
	} catch (error) {
		console.log("Error with /search API call.");
	}
};

function CreateCards({ results }) {
	CreateCards.propTypes = {
		results: PropTypes.array,
	};

	const history = useHistory();

	const classes = useStyles();
	console.log("Create card results:" + Array.isArray(results));
	console.log(results);

	async function businessDetail({ business }) {
		businessDetail.propTypes = {
			business: PropTypes.object,
		};

		let params = {
			id: business.id,
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
		return results.map((business) => {
			return (
				<Card className={classes.root} key={business.id} variant="outlined">
					<CardActionArea>
						<CardMedia className={classes.media} image={business.imageUrl} title={business.name}>
							<div className={classes.badge}>
								<Badge color="warning">
									{business.rating}
									<StarOutlinedIcon fontSize="inherit" className={classes.icon} />
								</Badge>
							</div>
						</CardMedia>
						<CardContent>
							<Typography className={classes.truncate} variant="h6" component="h2">
								{business.name}
							</Typography>

							<Typography variant="body2" color="textSecondary" component="p">
								{business.location.displayAddress[0]}
								<br />
								{business.location.displayAddress[1]}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<CardFooter className={classes.cardFooter}>
							<CreateEventModal business={business} />
							<Button size="sm" onClick={() => businessDetail({ business })} color="github">
								Learn More
							</Button>
						</CardFooter>
					</CardActions>
				</Card>
			);
		});
	}
	return <div></div>;
}
export { CreateCards, getResults };
