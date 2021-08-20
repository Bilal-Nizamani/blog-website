import axios from 'axios';

const URL = 'http://localhost:5000'

export const createPost = async (post) => {
    try {
        return await axios.post(`${URL}/create`, post);
    } catch (error) {
        console.log('error while calling creatpost api', error)
    }
}


export const getAllPosts = async (param) => {
    try {
        let response = await axios.get(`${URL}/posts${param}`);
        return response.data;
    } catch (error) {
        console.log('error whilte call getall posts ', error)
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${URL}/post/${id}`);
        return response.data;

    } catch (error) {
        console.log('error while getpost api', error)
    }
}

export const updatePost = async (id, post) => {
    try {
        await axios.post(`${URL}/update/${id}`, post);
    } catch (error) {
        console.log('error while updaing post', error);
    }
}


export const deletePost = async (id) => {
    try {
        await axios.delete(`${URL}/delete/${id}`);
    } catch (error) {
        console.log('error while deeleting post', error);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${URL}/file/upload`, data);
    } catch (error) {
        console.log('error while uploading image', error)
    }
}


// sign in and register
export const registerUser = async(data)=>{
    try{
         await axios.post(`${URL}/register`,data);

    }catch(error){
        console.log('error while calling  register  api', error);
    }
}

export const login = async (userlogin)=>{
    try{
        await axios.post(`${URL}/signin`, userlogin);
    

    }catch(error){
            console.log('error while calling signin api',error);
    }
}