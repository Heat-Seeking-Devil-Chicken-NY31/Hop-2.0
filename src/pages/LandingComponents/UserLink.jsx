import * as React from 'react';
import { Button, Box, Typography, CardMedia, CardActions, Card, CardContent } from '@mui/material';




const styles = {
    cardMedia: {
        component: "img",
        height: "320px",
        // image: `url(${thumper})`,
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

const UserLink = () => (

    <div>
        <Card sx={{ maxWidth: 400}} style= {styles.cardBody}>
        <CardMedia style= {styles.cardMedia}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontColor="black" style={styles.center}>
            Looking for work?
            </Typography>
            <Typography variant="body2" color="text.secondary" style={styles.center} textAlign='center'>
            If you are looking to pick up open shifts and contract work, create an account and sign in here!
            </Typography>
        </CardContent>
        <Box textAlign='center'>
          <Button variant='contained'>Sign Up Here</Button>
        </Box>
        </Card>
    </div>
)

export default UserLink;