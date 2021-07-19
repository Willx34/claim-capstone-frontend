import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import PropTypes from "prop-types";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function BusinessCarousel(props) {
	BusinessCarousel.propTypes = {
		photos: PropTypes.array,
		name: PropTypes.string,
	};
	console.log("These are the passed photos:", props.photos);

	const classes = useStyles();
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
			<Card carousel className={classes.businessCarousel}>
				<Carousel {...settings}>
					<div>
						<img src={props.photos[0]} alt="First slide" className="slick-image" />
					</div>
					<div>
						<img src={props.photos[1]} alt="Second slide" className="slick-image" />
					</div>
					<div>
						<img src={props.photos[2]} alt="Third slide" className="slick-image" />
					</div>
				</Carousel>
			</Card>
			<Typography variant="h4" className={classes.title}>
				&nbsp; {props.name}
			</Typography>
		</GridItem>
	);
}
