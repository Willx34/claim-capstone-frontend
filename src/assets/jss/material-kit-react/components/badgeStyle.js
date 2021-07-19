import {
	primaryColor,
	warningColor,
	dangerColor,
	successColor,
	infoColor,
	roseColor,
} from "assets/jss/material-kit-react.js";

const badgeStyle = {
	badge: {
		marginRight: "0px",
		borderRadius: "2px",
		padding: "5px 12px",
		textTransform: "uppercase",
		fontSize: "12px",
		fontWeight: "500",
		lineHeight: "1",
		color: "#fff",
		textAlign: "center",
		whiteSpace: "nowrap",
		verticalAlign: "baseline",
		display: "inline-block",
	},
	primary: {
		backgroundColor: primaryColor,
	},
	warning: {
		backgroundColor: warningColor,
	},
	danger: {
		backgroundColor: dangerColor,
	},
	success: {
		backgroundColor: successColor,
	},
	info: {
		backgroundColor: infoColor,
	},
	rose: {
		backgroundColor: roseColor,
	},
	gray: {
		backgroundColor: "#333333",
	},
};

export default badgeStyle;
