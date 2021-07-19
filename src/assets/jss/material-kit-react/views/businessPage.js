import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const profilePageStyle = {
	container,
	profile: {
		textAlign: "center",
		"& img": {
			maxWidth: "160px",
			width: "100%",
			margin: "0 auto",
			transform: "translate3d(0, -50%, 0)",
		},
	},
	description: {
		margin: "1.071rem auto 0",
		maxWidth: "600px",
		color: "#999",
		textAlign: "center !important",
	},
	name: {
		marginTop: "-80px",
	},
	...imagesStyle,
	main: {
		background: "#FFFFFF",
		position: "relative",
		zIndex: "3",
	},
	mainRaised: {
		margin: "-60px 30px 0px",
		paddingBottom: "10px",
		borderRadius: "6px",
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
	},
	title: {
		...title,
		display: "inline-block",
		position: "relative",
		marginTop: "30px",
		minHeight: "32px",
		textDecoration: "none",
	},
	socials: {
		marginTop: "0",
		width: "100%",
		transform: "none",
		left: "0",
		top: "0",
		height: "100%",
		lineHeight: "41px",
		fontSize: "20px",
		color: "#999",
	},
	navWrapper: {
		margin: "20px auto 50px auto",
		textAlign: "center",
	},
	search: {
		margin: "29px 0 19px 0",
		position: "relative",
		display: "inline-flex",
	},

	searchBar: {
		display: "inline-flex",
	},

	carousel: {
		marginTop: "-100px",
	},

	address: {
		marginTop: "20px",
		marginLeft: "-50px",
		paddingTop: "15px",
		paddingLeft: "15px",
		width: "100%",
		paddingBottom: "15px",
		borderRadius: "6px",
		display: "inline-block",
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
	},

	reviews: {
		marginTop: "20px",
		padding: "10px",
		borderRadius: "6px",
		marginLeft: "20px",

		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
	},

	review: {
		marginTop: "10px",
		padding: "10px",
		borderRadius: "6px",
		marginLeft: "10px",
		width: "95%",

		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
	},

	secondPanel: {
		background: "#9c27b0",
		width: "100%",
		height: "2px",
	},
	thirdPanel: {
		background: "#9c27b0",
		width: "100%",
		height: "2px",
		marginTop: "20px",
	},
	reviewTitle: {
		marginLeft: "20px",
	},

	icon: {
		display: "flex",
	},
};

export default profilePageStyle;
