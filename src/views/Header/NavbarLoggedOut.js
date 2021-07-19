import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import Header from "components/Header/Header.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Modal from './Modal'


export default function NavbarLoggedOut() {
  
  const useStyles = makeStyles(styles);

  const classes = useStyles();



  return (
    <>
  <Header
  brand="Clove"
  fixed
  rightLinks={
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          Discover

        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          className={classes.navLink}
          color="transparent"
        >
          About Us
        </Button>

      </ListItem>
      <ListItem className={classes.listItem}>
      <Modal />   
      </ListItem>  
    </List>
  } />
  
  </>
  
  
);
}
