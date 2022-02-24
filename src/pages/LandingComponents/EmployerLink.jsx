import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        height: '45vw'
    }
};

const EmployerLink = () => (

<div>
<Card sx={{ maxWidth:400}} style= {styles.cardBody}>
        <CardMedia         
        component= "img"
        height= "320px"
        image= {thumper}
        alt= "Thumper Logo"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontColor="black">
            What is Hop 2.0?
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        </Card>
        </div>
)

export default EmployerLink;