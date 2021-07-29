import axios from "axios";

const instance = axios.create({
    baseURL: "https://simple-blog-api.crew.red",
})

export const fetchPosts = async () => {
    try {
        const response = await instance.get('/posts')
        const data = await response.data
        return data
    } catch (error) {
        return { error }
    }
}

export const fetchPost = async (id) => {
    try {
        const response = await instance.get('/posts/'+id+'?_embed=comments')
        const data = await response.data
        return data
    } catch (error) {
        return { error }
    }
}

export const createPost = async (post) => {
    try {
        const response = await instance.post('/posts', post)
        const data = await response.data
        return data
    } catch (error) {
        return { error }
    }
}

export const addComment = async (text, id) => {
    try {
        const response = await instance.post('/comments', {postId: id, body: text})
        const data = await response.data
        return data
    } catch (error) {
        return { error }
    }
}