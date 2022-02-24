import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Box, Typography } from '@mui/material';
import thumper from "../LandingComponents/backgrounds/ThumperHop2.0.300pxHeight.png";

const styles = {
    cardMedia: {
        component: "img",
        height: "320px",
        image: `url(${thumper})`,
        alt: "Thumper Logo",
    },
    cardBody: {
        display: 'block',
        width: '30vw',
        transitionDuration: '0.3s',
        height: '30vw',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
};

const EmployerLink = () => (

        <div>
        <Card sx={{ maxWidth:400}} style= {styles.cardBody}>
        <CardMedia         
        component= "img"
        // height= "320px"
        image= {thumper}
        alt= "Thumper Logo"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontColor="black" style={styles.center}>
            Are you an employer?
            </Typography>
            <Typography variant="body2" color="text.secondary" style={styles.center} textAlign='center'>
            If you are looking for someone to fill an open job, create an account and sign in here!
            </Typography>
        </CardContent>
        <Box textAlign='center'>
          <Button variant='contained'>Sign Up Here</Button>
        </Box>
        </Card>
        </div>
)

export default EmployerLink;