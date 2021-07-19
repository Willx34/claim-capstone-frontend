/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CardHeader from "components/Card/CardHeader.js";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Email from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { DoubleArrow } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles(modalStyle)
const loginStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Modal() {
  const [modal, setModal] = React.useState(false);
  const classes = useStyles();
  const loginClass = loginStyles();

  const [inputValues, setInputValues] = useState({
    email: '', password: '',
});

const history = useHistory();

const handleOnChange = event => {
    const { name, value } = event.target;
    console.log(name, value)
    setInputValues({ ...inputValues, [name]: value });
    
};

function LogIn(event) {
    event.preventDefault();
    const user = {
        email: inputValues.email,
        password: inputValues.password,
    }
    console.log(user)
    axios.post('http://localhost:8080/login', user).then(response => {
        console.log('successful login', response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        let path = '/landing';
        history.push(path);
    }).catch(error => { console.log('error') });
}

  return (
    <div >
        <Button round color="primary" onClick={() => setModal(true)}>
          Login
        </Button>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >

      <form className={loginClass.form}>
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
         <CardHeader color="primary" className={loginClass.cardHeader}>
                  <h4>Login</h4>
         </CardHeader>
          
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
        >

            <CustomInput
                    labelText="Email..."
                    id="email"
                    name="email"
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
                    id="password"
                    name="password"
                    
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "password",
                      onChange: (event) => handleOnChange(event),
                      name: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputIconsColor}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      ),
                      autoComplete: "off",
                    }}
                  />

        </DialogContent>
        <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterCenter}
        >
        <CardFooter className={loginClass.cardFooter}>
          <Button onClick={LogIn}  justIcon round color="primary"><DoubleArrow style={{color: "#FFFFFF"}}/></Button>
          </CardFooter>      
          
        </DialogActions>
        </form>
        <CardFooter className={loginClass.loginFooter}>
          Not registered? &nbsp;<Link color="primary" to="/signup"> Sign Up</Link>
          </CardFooter>      
      </Dialog>
    </div>
  );
}