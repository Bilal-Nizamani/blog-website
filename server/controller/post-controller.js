
import Post from "../schema/post-schema.js";

export const createPost = async (request, response) => {

    try {
        const post = await new Post(request.body);
        post.save();
        response.status(200).json('blog saved sucessfuly');

    } catch (error) {
        response.status(500).json(error);


    }

}

export const getAllPosts = async (request, response) => {

        let username= request.query.username;
        let category = request.query.category;
        let posts;
    try {
        if(username){
          posts =  await Post.find({username:username});
        }
        else if(category){
          posts =  await Post.find({category:category});
        }
        else{
           posts = await Post.find({});

        }


        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error);
    }

}

export const getPost = async (request, response) => {
    try {

        let post = await Post.findById(request.params.id);

        response.status(200).json(post);

    } catch (error) {
        response.status(500).json(error);
        console.log("Chek", request.params.id);
    }
}
export const updatePost = async (request, response) => {
    try {
        console.log(request.params.id, request.body);
        await Post.findByIdAndUpdate(request.params.id, { $set: request.body });
        response.status(200).json(`postUpdated successfuly`);

    } catch (error) {
        response.status(500).json(error);
    }
}
    export const deletePost = async (request, response) => {
        try {
            await Post.findByIdAndDelete(request.params.id);
            response.status(200).json(`postUpdated successfuly`);

        } catch (error) {
            response.status(500).json(error);
        }

    }