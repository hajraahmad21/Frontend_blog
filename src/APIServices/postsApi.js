import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const createPostApi = async(postData) =>{
    const response = await axios.post(`${baseUrl}/posts/create`,{...postData});
    return response.data;

}
