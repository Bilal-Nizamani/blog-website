import React, { useEffect, useState } from 'react'
import Post from './Post'
import { Grid, makeStyles } from '@material-ui/core'
import { getAllPosts } from '../../service/api';
import { NavLink, useLocation } from 'react-router-dom';


const useStyle = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'inherit',
        textAlign: 'center'


    }
});
function Posts() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllPosts(search);
            setPosts(data);
            
        }
        fetchData();
    }, [search]);


    const classes = useStyle();

    return (<>
        {posts.map((post, index) => {

            return <Grid key={index} item lg={3} sm={4} xs={12}>
                <NavLink className={classes.link} to={`/detail/${post._id}`}>
                    <Post post={post} />
                </NavLink>
            </Grid>
        })}

    </>
    )
}

export default Posts
