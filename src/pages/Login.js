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
      border: 1,
      width: '5rem',
      height: '5rem',
      borderRadius: '8px',
    }
  }));
  
  const classes= useStyles();

  return (
    <div padding>
        <ResponsiveAppBar/>
        <Grid container direction="row" spacing={3} justifyContent="space-evenly" alignItems="center">
          <Grid item xs= {12} md= {6} className={classes.gridItem}>
            <Box height="200px" width="200px">
              <ProductDescription/>
            </Box>
          </Grid>
          <Grid item xs= {12} md= {6} className={classes.gridItem}>
            <Box>
              <ExistingUserLink/>
            </Box>
          </Grid>
          <Grid item xs= {12} md= {6} className={classes.gridItem}>
            <Box>
              <UserLink/>
            </Box>
          </Grid>
          <Grid item xs= {12} md= {6} className={classes.gridItem}>
            <Box>
              <EmployerLink/>
            </Box>
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