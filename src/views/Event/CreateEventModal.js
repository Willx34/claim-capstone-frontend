/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CardHeader from "components/Card/CardHeader.js";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import { useHistory } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Datetime from "react-datetime";
import FormControl from "@material-ui/core/FormControl";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Counter from "./Counter";
import Badge from "components/Badge/Badge.js";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { getResults } from "views/Search/GetEvents";

const useStyles = makeStyles(modalStyle);
const loginStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="left" ref={ref} {...props} />;
});

export default function CreateEventModal({ business }) {
	CreateEventModal.propTypes = {
		business: PropTypes.object,
	};

	const [modal, setModal] = React.useState(false);
	const classes = useStyles();
	const loginClass = loginStyles();

	const [inputValues, setInputValues] = useState({
		businessId: business.id,
		scheduledDate: "",
		attendees: 2,
	});

	const history = useHistory();

	const handleDateChange = (x, event) => {
		let tempValues = { ...inputValues };
		let tempScheduledDate = x.format();
		tempValues.scheduledDate = tempScheduledDate;
		setInputValues(tempValues);
	};

	async function CreateEvent() {
		const user = JSON.parse(localStorage.getItem("user"));
		const userEmail = user.email;
		const createEvent = {
			businessId: inputValues.businessId,
			scheduledDate: inputValues.scheduledDate,
			attendeeCount: inputValues.attendees,
			createdBy: { email: userEmail },
		};
		console.log(createEvent);
		await axios
			.post("http://localhost:8080/createEvent", createEvent)
			.then((response) => {
				console.log("successfully added event");
			})
			.catch((error) => {
				console.log("error");
			});
		const updateResults = await getResults(user);
		localStorage.setItem("results", JSON.stringify(updateResults));
	}

	function counterCallback(attendees) {
		let tempValues = { ...inputValues };
		tempValues.attendees = attendees;
		setInputValues(tempValues);
		console.log("Setting counter callback in parent to: ", attendees);
	}

	return (
		<div>
			<Button size="sm" color="primary" onClick={() => setModal(true)}>
				Add Event
			</Button>

			<Dialog
				classes={{
					root: classes.center,
					paper: classes.createEvent,
				}}
				open={modal}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => setModal(false)}
				aria-labelledby="modal-slide-title"
				aria-describedby="modal-slide-description"
			>
				<form className={loginClass.form}>
					<CardMedia className={classes.media} image={business.imageUrl} title={business.name}>
						<div className={classes.badge}>
							<Badge color="warning">
								{business.rating}
								<StarOutlinedIcon fontSize="inherit" className={classes.icon} />
							</Badge>
						</div>
					</CardMedia>
					<DialogTitle id="classic-modal-slide-title" className={classes.eventModalHeader}>
						<CardHeader>
							<Typography className={classes.truncate} variant="h5" component="h2">
								{business.name}
							</Typography>
						</CardHeader>
					</DialogTitle>
					<div className={classes.content}>
						<DialogContent className={classes.content}>
							<GridContainer>
								<GridItem xs={12} sm={12} md={6}>
									<Typography component="h2">Schedule</Typography>
								</GridItem>
								<GridItem xs={12} sm={12} md={6}>
									<Typography component="h2">&nbsp; &nbsp; Attendees</Typography>
								</GridItem>
								<GridItem xs={12} sm={12} md={6}>
									<FormControl fullWidth>
										<Datetime
											onChange={(x, event) => {
												handleDateChange(x, event);
											}}
											inputProps={{
												placeholder: "Date and Time",
											}}
										/>
									</FormControl>
								</GridItem>
								<GridItem xs={12} sm={12} md={6}>
									<FormControl fullWidth>
										<Counter counterCallback={counterCallback} />
									</FormControl>
								</GridItem>
							</GridContainer>
						</DialogContent>
						<DialogActions className={classes.modalFooter + " " + classes.modalFooterCenter}>
							<CardFooter className={loginClass.addEventFooter}>
								{" "}
								<Button color="github" size="sm" variant="outlined" onClick={CreateEvent}>
									Add Event
								</Button>
							</CardFooter>
						</DialogActions>
					</div>
				</form>
			</Dialog>
		</div>
	);
}
