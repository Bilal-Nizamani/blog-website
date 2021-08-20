import { Box, makeStyles, Typography } from '@material-ui/core';

import React from 'react'

const useStyles = makeStyles({
    container: {
        height: 350,
        borderRadius: 10,
        border: '1px solid #d3cede',
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "97%",
        marginTop: "1rem",
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        width: '100%',
        borderRadius: "10px",
        objectFit: "cover",
        margin: 0,

    },
    text: {
        fontSize: 12,
        color: "gray",
        fontFamily: 'monospace'

    },
    heading: {
        fontSize: 20,
        fontWeight: 920,
        fontFamily: ' system-ui',
        color: 'rgba(34, 36, 35,0.92)'

    },
    detail: {
        fontSize: 14,
        wordBreak: "break-word",
        fontFamily: " system-ui",
        color: 'rgba(34, 36, 35,0.8)',
        textAlign: 'left'

    },

});
function Post({ post }) {
    const classes = useStyles();
    const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDeG3vAYTY5UOAApYxAeAMbuM8MJ7IbTkow&usqp=CAU'

    return (
        <>
            <Box className={classes.container}>
                <img className={classes.image} src={post.picture || url} alt="Img" />
                <Typography className={classes.text}> {post.createDate} </Typography>
                <Typography className={classes.heading}>{post.title} </Typography>
                <Typography className={classes.text} > {post.username}</Typography>
                <Typography className={classes.detail}>{post.description}</Typography>
            </Box>
        </>
    )
}

export default Post
