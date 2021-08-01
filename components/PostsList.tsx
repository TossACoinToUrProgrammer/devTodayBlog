import React from 'react';
import PostItem from './PostItem';
import styled from 'styled-components'

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const PostsList = ({ posts }) => {
    return (
        <List>
            {posts.map(post => (post.title || post.body) && <PostItem key={post.id} post={post} />)}
        </List>
    );
};

export default PostsList;