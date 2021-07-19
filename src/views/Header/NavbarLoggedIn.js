/* eslint-disable react/prop-types */
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import Header from "components/Header/Header.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

export default function NavbarLoggedOut() {
	const useStyles = makeStyles(styles);

	const classes = useStyles();

	const history = useHistory();

	function logoutUser() {
		localStorage.clear();
		let path = "/";
		history.push(path);
	}

	const landingRedirect = () => {
		history.push("/landing");
	};

	return (
		<>
			<Header
				brand="Clove"
				fixed
				rightLinks={
					<List className={classes.list}>
						<ListItem className={classes.listItem}>
							<Button href="" className={classes.navLink} onClick={landingRedirect} color="transparent">
								Dashboard
							</Button>
						</ListItem>
						<ListItem className={classes.listItem}>
							<Button className={classes.navLink} color="transparent">
								About Us
							</Button>
						</ListItem>
						<ListItem className={classes.listItem}>
							<Button
								round
								color="rose"
								onClick={() => {
									logoutUser();
								}}
							>
								Logout
							</Button>
						</ListItem>
					</List>
				}
			/>
		</>
	);
}
