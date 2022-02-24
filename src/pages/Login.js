import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import signInWithGoogle from "../services/firebase";
import ResponsiveAppBar from '../components/NavbarMUI'
import { Typography, AppBar, Grid, Container} from "@mui/material";
import { makeStyles } from '@mui/styles';

//Removed components
// import Navbar from "../components/Navbar";

//import jsx components
import ProductDescription from "./LandingComponents/ProductDescription";
import EmployerLink from "./LandingComponents/EmployerLink";
import UserLink from "./LandingComponents/UserLink";
import ExistingUserLink from "./LandingComponents/ExistingUserLink";
import { Box } from "@material-ui/core";



  const Login = () => {

  const navigate = useNavigate();
  async function login() {
    await signInWithGoogle();
    await navigate("/Home");
  }

  const useStyles = makeStyles((theme) => ({
    appBar:{
      backgroundColor: "rgba(89, 39, 245, 0.24)",
      primary: "black"
    },
    gridItem:{
      border: 3,
      width: '5rem',
      height: '5rem',
      borderRadius: '8px',
      display: "flex",
      justifyContent: "center",
    },
  }));
  
  const classes= useStyles();
  
  return (
    <div>
        <ResponsiveAppBar/>
        <Grid container direction="row" spacing={3} justifyContent="center" alignItems="center">
          <Grid item sx={{width: "50%", height: "50%"}} className={classes.gridItem}>
              <ProductDescription/>
          </Grid>
          <Grid item sx={{width: "50%", height: "50%"}} className={classes.gridItem}>
              <ExistingUserLink/>
          </Grid>
          <Grid item sx={{width: "50%", height: "50%"}} className={classes.gridItem}>
              <UserLink/>
          </Grid>
          <Grid item sx={{width: "50%", height: "50%"}} className={classes.gridItem}>
              <EmployerLink/>
          </Grid>
        </Grid>
        <AppBar className={classes.appBar} position="static">
          <Typography variant="h6" color="black">
            Hop 2.0
          </Typography>
        </AppBar>
    </div>
  );
};

export default Login;


/*
        <Navbar/>

<button className="d-block mt-10 btn btn-dark m-auto" onClick={login}>
Continue with Google
</button>
*/