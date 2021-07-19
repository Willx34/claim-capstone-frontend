import React from "react";
import Header from "./Header/Header";
import Parallax from "components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import styles from "assets/jss/material-kit-react/views/components.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Footer from "views/Footer/Footer.js";

const useStyles = makeStyles(styles);

export default function Home() {
	const classes = useStyles();

	return (
		<div>
			<Header />

			<Parallax image={require("assets/img/bg-home.jpg").default}>
				<div className={classes.homeContainer}>
					<GridContainer>
						<GridItem>
							<div className={classes.brand}>
								<h1 className={classes.title}>Clove.</h1>
								<h3 className={classes.subtitle}>Coordinating all of your dining needs.</h3>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>

			<div className={classNames(classes.main, classes.mainRaised)}>
				<div>&nbsp;</div>
				<div>&nbsp;</div>
				<div>&nbsp;</div>
				<div>&nbsp;</div>
				<div>&nbsp;</div>
				<div>&nbsp;</div>
				<div>&nbsp;</div>
				<div>&nbsp;</div>
				<div>&nbsp;</div>
			</div>
			<Footer />
		</div>
	);
}
