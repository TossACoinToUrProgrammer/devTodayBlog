export interface IPost {
    id: number
    title: string
    body: string
    comments?: IComment[]
}

export interface IComment {
    postId: number
    body: string
    id: number
}

export enum PostActionTypes {
    SET_POSTS = "SET_POSTS",
    TOGGLE_LOADING = "TOGGLE_LOADING",
    ADD_COMMENT = "ADD_COMMENT",
    SET_POST_DETAILS = "SET_POST_DETAILS"
}

interface SetPostsActionType {
    type: PostActionTypes.SET_POSTS
    payload: IPost[]
}

interface ToggleLoading {
    type: PostActionTypes.TOGGLE_LOADING
    payload: boolean
}

interface SetPostDetailsActionType {
    type: PostActionTypes.SET_POST_DETAILS
    payload: IPost
}

interface AddCommentActionType {
    type: PostActionTypes.ADD_COMMENT
    payload: IComment
}

export type PostAction = SetPostsActionType | ToggleLoading | SetPostDetailsActionType | AddCommentActionType