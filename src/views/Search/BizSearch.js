import React, { useState, useEffect } from "react";
import { Fastfood, LocationOn, Search } from "@material-ui/icons";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import getLocation from "./Location";
import { CreateCards, getResults } from "./SearchResults.js";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export function BizSearch() {
	const [inputValues, setInputValues] = useState({
		search: "",
		location: "",
		results: [],
		initialLocation: "",
		title: "",
	});

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				setLocation(getLocation(position.coords.latitude, position.coords.longitude));
			});
		}
	}, []);

	function setLocation(location) {
		const tempInput = { ...inputValues };
		tempInput.initialLocation = location;
		setInputValues(tempInput);
	}

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setInputValues({ ...inputValues, [name]: value });
		console.log(name, value);
	};

	const classes = useStyles();

	async function search() {
		const tempInput = { ...inputValues };
		tempInput.results = await getResults(inputValues.search, inputValues.location);
		tempInput.title = inputValues.search + " Near " + inputValues.location;
		setInputValues(tempInput);
	}

	return (
		<>
			<span className={classes.searchBar}>
				<Button size="sm" color="github" className={classes.search}>
					Find{" "}
				</Button>{" "}
				&nbsp;&nbsp;
				<CustomInput
					labelText="Search..."
					id="search"
					formControlProps={{
						fullWidth: false,
					}}
					inputProps={{
						type: "search",
						onChange: (event) => handleOnChange(event),
						name: "search",

						endAdornment: (
							<InputAdornment position="end">
								<Fastfood className={classes.inputIconsColor} />
							</InputAdornment>
						),
					}}
				/>
				&nbsp; &nbsp;
				<Button size="sm" color="github" className={classes.search}>
					Near{" "}
				</Button>{" "}
				&nbsp; &nbsp;
				<CustomInput
					labelText="Location..."
					id="location"
					formControlProps={{
						fullWidth: false,
					}}
					inputProps={{
						type: "location",
						onChange: (event) => handleOnChange(event),
						name: "location",
						defaultValue: inputValues.initialLocation,

						endAdornment: (
							<InputAdornment position="end">
								<LocationOn className={classes.inputIconsColor} />
							</InputAdornment>
						),
					}}
				/>
				&nbsp;
				<Button size="sm" onClick={search} className={classes.search} justIcon round color="primary">
					<Search style={{ color: "#FFFFFF" }} />
				</Button>
			</span>
			<Typography>{inputValues.title} </Typography>
			<GridContainer justify="flex-start">
				<CreateCards results={inputValues.results} />
			</GridContainer>
		</>
	);
}
