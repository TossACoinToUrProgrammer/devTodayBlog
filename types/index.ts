export interface IPost {
    id: number
    title: string
    body: string
    comment?: IComment[]
}

export interface IComment {
    postId: number
    body: string
    id: number
}