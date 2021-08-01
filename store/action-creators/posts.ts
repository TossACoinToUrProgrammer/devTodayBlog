import { Dispatch } from "react";
import { IComment, IPost, PostAction, PostActionTypes } from "../../types";
import * as api from '../../api'

export const setError = (error): PostAction => ({
    type: PostActionTypes.SET_ERROR,
    payload: error.statusText || 'Произошла ошибка'
})

export const setPosts = (posts: IPost[]): PostAction => ({
    type: PostActionTypes.SET_POSTS,
    payload: posts
})

export const setPostDetails = (post: IPost): PostAction => ({
    type: PostActionTypes.SET_POST_DETAILS,
    payload: post
})

export const toggleLoading = (bool: boolean): PostAction => ({
    type: PostActionTypes.TOGGLE_LOADING,
    payload: bool
})

export const addComment = (comment: IComment): PostAction => ({
    type: PostActionTypes.ADD_COMMENT,
    payload: comment
})

export const fetchPosts = () => async (dispatch: Dispatch<PostAction>) => {
    dispatch(toggleLoading(true))
    const posts = await api.fetchPosts()
    !posts.error ? dispatch(setPosts(posts)) : dispatch(setError(posts.error))
    dispatch(toggleLoading(false))
}

export const fetchPost = (id) => async (dispatch: Dispatch<PostAction>) => {
    dispatch(toggleLoading(true))
    const post = await api.fetchPost(id)
    !post.error ? dispatch(setPostDetails(post)) : dispatch(setError(post.error))
    dispatch(toggleLoading(false))
}

export const addCommentQuery = (text, id) => async (dispatch: Dispatch<PostAction>) => {
    dispatch(toggleLoading(true))
    const result = await api.addComment(text, id)
    !result.error ? dispatch(addComment(result)) : dispatch(setError(result.error))
    dispatch(toggleLoading(false))
}