import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { Link, useHistory} from 'react-router-dom';
import { getPost, deletePost } from '../../../service/api';
const useStyle = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "50vh", 
        objectFit: "cover",

    },
    container: {
        transition: '0.3s',
        padding: "0 100px",
        [theme.breakpoints.down('md')]: {

            padding: 0
        }
    },
    icon: {
        float: 'right',
        margin: '3px auto 8px auto'
    },
    heading2: {
        fontSize: '2rem',
        fontWeight: 600,

    },
    heading: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        margin: "24px 0 ",
        width: '100%'


    },
    subheading: {
        display: "flex",
        margin: '10px 1px'
    },
    link:{
        textDecoration:'none',
        color:'inherited'
    }
}))

function DetailView({ match }) {
    const url = 'https://clickfirstmarketing.com/wp-content/uploads/blog-for-business.jpg';
    const history = useHistory();

    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    }, []);

    const classes = useStyle();

    const deleteBlog= async ()=>{
        await deletePost(post._id);
        history.push('/');
    }

    return (
        <Box className={classes.container}>
            <img src={ post.picture||url} alt='banner' className={classes.image} />

            <Box className={classes.icon}>
                <Button style={{ color: "red" }} >  <DeleteOutlineIcon onClick={deleteBlog}/></Button>
                <Link exact to={`/update/${post._id}`}> <Button style={{ color: "green" }}>  <EditIcon /> </Button></Link>
            </Box>

            <Box className={classes.heading}>
                <Typography className={classes.heading2}>
                    {post.title}
                </Typography>
            </Box>

            <Box className={classes.subheading}>

            <Link className={classes.link} to={`/?username=${post.username}`}> <Typography style={{ marginRight: "auto" }}> {post.username} </Typography> </Link>
             <Typography style={{ marginLeft: "auto" }}> {new Date (post.createDate).toDateString()} </Typography> 

            </Box>

            <Typography>
                    {post.description}
            </Typography>

        </Box>
    )
}

export default DetailView
