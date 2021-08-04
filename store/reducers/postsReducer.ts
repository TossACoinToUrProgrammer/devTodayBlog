import { IPost, PostAction, PostActionTypes } from "../../types";

const initialState = {
    posts: [] as IPost[],
    isLoading: false,
    postDetails: {} as IPost,
    error: null as any
}

export const postsReducer = (state = initialState, action: PostAction): typeof initialState => {
    switch (action.type) {
        case PostActionTypes.SET_POSTS:
            return { ...state, posts: action.payload.reverse() }
        case PostActionTypes.TOGGLE_LOADING:
            return { ...state, isLoading: action.payload }
        case PostActionTypes.SET_POST_DETAILS:
            return { ...state, postDetails: action.payload }
        case PostActionTypes.ADD_COMMENT:
            const comments = state.postDetails.comments || []
            comments.unshift(action.payload)
            return { ...state, postDetails: {...state.postDetails, comments}}
        case PostActionTypes.SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}