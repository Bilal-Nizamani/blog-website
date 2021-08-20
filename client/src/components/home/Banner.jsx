import React from 'react'
import { makeStyles, Box, Typography } from '@material-ui/core';
const useStyles = makeStyles({

    image: {
        background: `url(${"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"}) center/55% repeat-x #000`,
        width: "100%",
        height: "50vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        color:"white",
        flexDirection:"column",
        '& :first-child':{
            fontSize:70,
            lineHeight:1,

            
        },
        '& :last-child':{
            fontSize:20,
        }
    }
})

function Banner() {
    const classes = useStyles();
    return (

        <Box className={classes.image}>
            <Typography>Blog </Typography>
            <Typography>Code for Bilal </Typography>

        </Box>
    )
}

export default Banner
