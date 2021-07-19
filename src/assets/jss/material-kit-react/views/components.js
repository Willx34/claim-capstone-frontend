import { container } from "assets/jss/material-kit-react.js";


const componentsStyle = {

  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
    
  },

  homeContainer: {
    
    color: "#FFFFFF",
    textAlign: "left",
    marginLeft: "10%"

  },

  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    borderRadius: "10px",
    backdropFilter: "blur(2px)",
    padding: "0",
    border: "0",
  },
  subtitle: {
    fontSize: "1.313rem",
 
    margin: "0px",
    borderRadius: "10px",
    backdropFilter: "blur(2px)",
    padding: "0",
    border: "0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
};

export default componentsStyle;
