import React from 'react';

import { NextThunkDispatch, wrapper } from '../store';
import { fetchPosts } from '../store/action-creators/posts';

import MainLayout from '../components/MainLayout';
import { useTypesSelector } from '../hooks/useTypesSelectors';
import PostsList from '../components/PostsList';



const Posts: React.FC = () => {
    const { posts, isLoading } = useTypesSelector(state => state.posts)

    return (
        <MainLayout>
            <h2>Latest Posts</h2>
            <PostsList posts={posts} />
        </MainLayout>
    );
};

export default Posts;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchPosts())
})