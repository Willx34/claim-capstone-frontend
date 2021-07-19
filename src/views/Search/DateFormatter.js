import Moment from "moment";
import React from "react";
import PropTypes from "prop-types";

export function Dateformatter(props) {
	Dateformatter.propTypes = {
		date: PropTypes.string,
	};

	var date = props.date;

	return <> {Moment(date).format("LLL")}</>;
}
