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
        height: '30vw',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    }
};

const ExistingUserLink = () => (
    <div>
        <Card sx={{ maxWidth: 400}}  style= {styles.cardBody}>
        <CardMedia style= {styles.cardMedia}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontColor="black" style={styles.center}>
                Already have an account? 
            </Typography>
            <Typography variant="body2" color="text.secondary" style={styles.center}>
            LOG IN HERE!
            </Typography>
        </CardContent>
        <Box textAlign='center'>
            <Button variant="contained">
            Log In
            </Button>
        </Box>
        </Card>
    </div>

)

export default ExistingUserLink;