import React from "react";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem";
import PropTypes from "prop-types";

class Counter extends React.Component {
	state = { counter: 2 };

	handleIncrement = () => {
		this.setState((state) => ({ counter: state.counter + 1 }));
		this.props.counterCallback(this.state.counter + 1);
	};

	handleDecrement = () => {
		this.setState((state) => ({ counter: state.counter - 1 }));
		this.props.counterCallback(this.state.counter - 1);
	};
	render() {
		return (
			<GridItem>
				<Button size="sm" justIcon color="primary" onClick={this.handleDecrement}>
					-
				</Button>
				&nbsp; &nbsp;
				{this.state.counter}
				&nbsp; &nbsp;
				<Button size="sm" justIcon color="primary" onClick={this.handleIncrement}>
					+
				</Button>
			</GridItem>
		);
	}
}

Counter.propTypes = {
	counterCallback: PropTypes.func,
};

export default Counter;
