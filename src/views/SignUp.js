/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "views/Header/Header";
import Footer from "views/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import axios from "axios";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg-signup.jpg";
import { useHistory } from "react-router";

const useStyles = makeStyles(styles);

export default function LoginPage(setUser) {
	const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
	setTimeout(function () {
		setCardAnimation("");
	}, 700);

	const classes = useStyles();

	const [inputValues, setInputValues] = useState({
		email: "",
		password: "",
		lastName: "",
		firstName: "",
	});

	const history = useHistory();

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setInputValues({ ...inputValues, [name]: value });
		console.log(name, value);
	};

	function SignUp() {
		const user = {
			email: inputValues.email,
			password: inputValues.password,
			firstName: inputValues.firstName,
			lastName: inputValues.lastName,
		};
		axios
			.post("http://localhost:8080/save", user)
			.then((response) => {
				console.log("successful login", response.data);
				localStorage.setItem("user", JSON.stringify(response.data));
				history.push("/landing");
			})
			.catch((error) => {
				console.log("error");
			});
	}

	return (
		<div>
			<Header />
			<div
				className={classes.pageHeader}
				style={{
					backgroundImage: "url(" + image + ")",
					backgroundSize: "cover",
					backgroundPosition: "top center",
				}}
			>
				<div className={classes.container}>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={4}>
							<Card className={classes[cardAnimaton]}>
								<form className={classes.form}>
									<CardHeader color="primary" className={classes.cardHeader}>
										<h4>Sign Up</h4>
										<div className={classes.socialLine}>
											<Button
												justIcon
												href="#pablo"
												target="_blank"
												color="transparent"
												onClick={(e) => e.preventDefault()}
											>
												<i className={"fab fa-twitter"} />
											</Button>
											<Button
												justIcon
												href="#pablo"
												target="_blank"
												color="transparent"
												onClick={(e) => e.preventDefault()}
											>
												<i className={"fab fa-facebook"} />
											</Button>
											<Button
												justIcon
												href="#pablo"
												target="_blank"
												color="transparent"
												onClick={(e) => e.preventDefault()}
											>
												<i className={"fab fa-google-plus-g"} />
											</Button>
										</div>
									</CardHeader>
									<p className={classes.divider}>Or Be Classical</p>
									<CardBody>
										<CustomInput
											labelText="First Name..."
											id="firstName"
											className={classes.multiLine}
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												type: "text",
												onChange: (event) => handleOnChange(event),
												name: "firstName",
											}}
										/>
										<CustomInput
											labelText="Last Name..."
											id="lastName"
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												type: "text",
												onChange: (event) => handleOnChange(event),
												name: "lastName",
												endAdornment: (
													<InputAdornment position="end">
														<People className={classes.inputIconsColor} />
													</InputAdornment>
												),
											}}
										/>

										<CustomInput
											labelText="Email..."
											id="emailSignup"
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												type: "email",
												onChange: (event) => handleOnChange(event),
												name: "email",
												endAdornment: (
													<InputAdornment position="end">
														<Email className={classes.inputIconsColor} />
													</InputAdornment>
												),
											}}
										/>
										<CustomInput
											labelText="Password"
											id="pass"
											formControlProps={{
												fullWidth: true,
											}}
											inputProps={{
												type: "password",
												onChange: (event) => handleOnChange(event),
												name: "password",
												endAdornment: (
													<InputAdornment position="end">
														<Icon className={classes.inputIconsColor}>lock_outline</Icon>
													</InputAdornment>
												),
												autoComplete: "off",
											}}
										/>
									</CardBody>
									<CardFooter className={classes.cardFooter}>
										<Button simple onClick={SignUp} color="primary" size="lg">
											Get started
										</Button>
									</CardFooter>
								</form>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
				<Footer whiteFont />
			</div>
		</div>
	);
}
