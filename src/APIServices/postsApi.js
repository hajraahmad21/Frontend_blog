import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const createPostApi = async(postData) =>{
    const response = await axios.post(`${baseUrl}/posts/create`,postData);
    return response.data;

}
export const fetchAllPosts = async()=>{
    const response = await axios.get(`${baseUrl}/posts`);
    return response.data;
}

export const getPostApi = async(id)=>{
    const response = await axios.get(`${baseUrl}/posts/${id}`);
    return response.data;
}

export const updatePostApi = async(id,postData)=>{
    const response = await axios.put(`${baseUrl}/posts/${id}`,{...postData});
    return response.data;
}

export const deletePostApi = async(id)=>{
    const response = await axios.delete(`${baseUrl}/posts/${id}`);
    return response.data;
}
