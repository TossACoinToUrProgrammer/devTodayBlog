import React from 'react';
import { IPost } from '../types';
import styled from 'styled-components'

interface PropTypes {
    post: IPost
}

const Card = styled.div`
    max-width: 600px;
    border-radius: 7px;
    border: 1px solid teal;
    padding: 5px 20px 15px;
`

const PostItem: React.FC<PropTypes> = ({ post }) => {
    return (
        <Card>
            <h3>{post.title}</h3> <p>{post.body}</p>
        </Card>
    );
};

export default PostItem;