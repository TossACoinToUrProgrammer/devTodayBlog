import React from 'react';
import Link from "next/link"
import MainLayout from "../components/MainLayout"

const Posts = ({ posts }) => {
    return (
        <MainLayout>
            <h1>Список пользователей</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.name}</Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
};

export default Posts;