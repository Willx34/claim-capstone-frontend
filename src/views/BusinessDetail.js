import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/businessPage.js";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import Footer from "views/Footer/Footer";
import Header from "views/Header/Header.js";
//import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BusinessCarousel from "views/BusinessDetails/BusinessCarousel";
import { Icon, Typography } from "@material-ui/core";
import LocationOn from "@material-ui/icons/LocationOn";
import Quote from "components/Typography/Quote.js";
import BizEvents from "views/BusinessDetails/BizEvents";
import BizNotes from "views/BusinessDetails/BizNotes";

const useStyles = makeStyles(styles);

export default function BusinessDetail() {
	const classes = useStyles();

	const location = useLocation();
	const [business, setBusiness] = useState(location.state.business);

	console.log("Passed this business to detail page: ", business);

	useEffect(() => {
		if (business !== location.state.business) {
			setBusiness(location.state.business);
		}
	}, [location]);

	return (
		<div>
			<Header />
			<Parallax exsmall filter image={require("assets/img/bg-signup.jpg").default} />
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div>
					<div className={classes.container}>
						<GridContainer justify="flex-start">
							<GridItem xs={12} sm={12} md={7} lg={9} className={classes.carousel}>
								<BusinessCarousel name={business.name} photos={business.photos} />
							</GridItem>
							<GridItem xs={12} sm={12} md={3} lg={3}>
								<div className={classes.address}>
									<Typography variant="h6" component="p">
										<Icon style={{ paddingBottom: "28px" }}>
											<LocationOn />
										</Icon>
										Address
									</Typography>
									<Typography variant="body1" component="p">
										<br />
										{business.location.displayAddress[0]}
										<br />
										{business.location.displayAddress[1]}
									</Typography>
								</div>
							</GridItem>
						</GridContainer>
						<div className={classes.secondPanel} />
						<GridContainer>
							<GridItem xs={12} sm={12} md={6} lg={6}>
								<div className={classes.reviews}>
									<Typography variant="h5" component="p" className={classes.reviewTitle}>
										Your Events
										<br />
										&nbsp;
									</Typography>
									<BizEvents id={business.id} />
								</div>
							</GridItem>
							<GridItem xs={12} sm={12} md={6} lg={6}>
								<div className={classes.reviews}>
									<Typography variant="h5" component="p" className={classes.reviewTitle}>
										Reviews
										<br />
										&nbsp;
									</Typography>
									<Quote text={business.reviews[0].text} author={business.reviews[0].user.name} />
									<Quote text={business.reviews[1].text} author={business.reviews[1].user.name} />
									<Quote text={business.reviews[2].text} author={business.reviews[2].user.name} />
								</div>
							</GridItem>
						</GridContainer>
						<div className={classes.thirdPanel} />

						<GridContainer>
							<GridItem xs={12} sm={12} md={12} lg={12}>
								<div className={classes.reviews}>
									<Typography variant="h5" component="p" className={classes.reviewTitle}>
										Your Notes
										<br />
										&nbsp;
									</Typography>
									<BizNotes id={business.id} />
								</div>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
