import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components'

import MainLayout from '../components/MainLayout';
import { IPost } from '../types';
import Posts from './posts';
import PostItem from '../components/PostItem';

interface PropsTypes {
    posts: IPost[]
}

const PostsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const posts2 = [
    {
        "id": 1,
        "title": "Sunt aut facere repellat provident occaecati",
        "body": "Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "id": 2,
        "title": "Nesciunt iure omnis dolorem tempora et accusantium",
        "body": "Consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas"
    },
    {
        "id": 3,
        "title": "Optio molestias id quia eum",
        "body": "Quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error"
    }
]

const Index: React.FC<PropsTypes> = ({ posts = posts2 }) => {
    return (
        <MainLayout>
            <PostsList>
                {posts.map(post => <PostItem key={post.id} post={post} />)}
            </PostsList>
        </MainLayout>
    );
};

export default Index;