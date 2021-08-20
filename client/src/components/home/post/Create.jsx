import React, { useState, useEffect } from 'react'
import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { createPost, uploadFile } from '../../../service/api';
import { useHistory } from 'react-router-dom'
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

function Create() {
    const classes = useStyle();

    const [post, setPost] = useState({
        title: '',
        description: '',
        picture: '',
        username: 'bilal',
        categories: 'all',
        createDate: new Date()
    });

    const url = post.picture ? post.picture : 'https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/add-photo-to-background-introduction.jpg';

    const [img, setImg] = useState('');
    const [image, setImage] = useState('');

    const history = useHistory();

    const handleChange = (e) => {

        const { value, name } = e.target;

        setPost({ ...post, [name]: value });
    }

    const savePost = async () => {
        await createPost(post);
        if(post.title && post.description){
            history.push('/');
        }
        else{
            alert("Plz fill the title and description");
        }
    }

    
    const imageHandler = (e) => {
        setImg(e.target.files[0]);

    }

    useEffect(() => {
        const getImage = async () => {
            if (img) {
                const data = new FormData();
                data.append("name", img.name);
                data.append("file", img);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();
    }, [img])


    return (
        <Box className={classes.container}>

            <img className={classes.image} src={url} alt="Banner" />

            <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <AddCircleOutlineIcon className={classes.icon} fontSize='Large' color='action' />
                </label>

                <input onChange={imageHandler} name="image" style={{ display: "none" }} type="file" id="fileInput" />

                <InputBase onChange={handleChange} name="title" value={post.title} className={classes.input} placeholder='Title' />
                <Button onClick={savePost} variant="contained" color="Primary"> Publish</Button>

            </FormControl>

            <TextareaAutosize onChange={handleChange} name="description" value={post.description} className={classes.textarea} rowsMin="5" placeholder='Tell Your story...' />

        </Box>
    )
}

export default Create
