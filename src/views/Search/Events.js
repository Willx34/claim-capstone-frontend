import React from "react";
import { CreateCards } from "./GetEvents";
import GridContainer from "components/Grid/GridContainer.js";
import { Typography } from "@material-ui/core";

export function Events() {
	return (
		<>
			<Typography variant="h5">Your Events</Typography>
			<GridContainer justify="flex-start">
				<CreateCards />
			</GridContainer>
		</>
	);
}
