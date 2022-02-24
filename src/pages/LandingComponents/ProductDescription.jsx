import * as React from 'react';
import { Button, Box, Typography, CardMedia, CardActions, Card, CardContent } from '@mui/material';


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
        height: '30vw'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
};

const ProductDescription = () => (
    <Card sx={{ maxWidth: 400}} style= {styles.cardBody}>
        <CardMedia         
        component= "img"
        image= {thumper}
        alt= "Thumper Logo"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontColor="black" style={styles.center}>
            What is Hop 2.0?
            </Typography>
            <Typography variant="body2" color="text.secondary" style={styles.center} textAlign='center'>
            Hop 2.0 is an app that connects employers with prospective employees. We are especially focused on part time and contract gigs.
            </Typography>
        </CardContent>
    </Card>
)

export default ProductDescription;