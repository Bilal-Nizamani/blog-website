import React from 'react'
import { useHistory } from 'react-router-dom';
import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useState, useEffect } from 'react';
import { getPost, updatePost } from '../../../service/api';
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
    form: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px auto'
    },
    input: {
        marginLeft: '2rem',
        flex: 1,
        fontSize: "30px"
    },

    icon: {
        marginTop: 4,
        cursor: "pointer",
        transition: '0.5s',
        '&:hover': {
            color: "rgba(1, 1, 1, 0.64)",
        }
    },
    textarea: {
        width: "100%",
        margin: 50,
        fontSize: '1.2rem',
        border: "none",
        '&:focus-visible': {
            outline: 'none',
        }
    }


}))
function Update({ match }) {

    const history = useHistory();


    const [post, setPost] = useState({
        title: '',
        description: '',
        picture: '',
        username: 'bilal',
        categories: 'all',
        createDate: new Date()
    });

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setPost({ ...post, [name]: value });
    }

    const updateBlog = async () => {
         await updatePost(match.params.id, post);
         history.push(`/detail/${post._id}`);
         

    }



    const classes = useStyle();
    const url = 'https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/add-photo-to-background-introduction.jpg';
    return (
        <Box className={classes.container}>
            <img className={classes.image} src={post.picture ||url} alt="Banner" />
            <FormControl className={classes.form}>
                <AddCircleOutlineIcon className={classes.icon} fontSize='Large' color='action' />
                <InputBase name='title' className={classes.input} placeholder='Title' onChange={handleChange} value={post.title} />
                <Button onClick={updateBlog} variant="contained" color="Primary"> Update</Button>
            </FormControl>

            <TextareaAutosize name='description' value={post.description} className={classes.textarea} onChange={handleChange} rowsMin="5" placeholder='Tell Your story...' />
        </Box>
    )
}

export default Update
