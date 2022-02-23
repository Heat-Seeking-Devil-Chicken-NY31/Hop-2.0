import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/material';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import { AppBar } from "@mui/material";
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';

//Import outside components
import Navbar from "../components/Navbar";
import ResponsiveAppBar from '../components/NavbarMUI';
// import { ClassNames } from "@emotion/react";

const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor: "rgba(89, 39, 245, 0.24)"
  },
  hero:{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://unsplash.com/photos/EkyuhD7uwSM')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "rgba(89,39,245,0.24)",
    fontSize: "4rem",
  }
}));

function Home() {
  const classes= useStyles();

  return (
    <div>
      <ResponsiveAppBar/>
      <Navbar />
      <h1 className="h1 m-10 d-flex justify-center">Home</h1>
      <Link to="/StaffGig">
        <button class="btn btn-success">Staff Gig</button>
      </Link>
      <Link to="/PostGig">
        <button class="btn btn-primary">Post Gig</button>
      </Link>
      <AppBar className={classes.appBar} position="static">
        <Typography variant="h6" color="black">
          Hop 2.0
        </Typography>
      </AppBar>
    </div>
  );
};

export default Home;
