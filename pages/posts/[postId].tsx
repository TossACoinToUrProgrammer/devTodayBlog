import React from 'react';
import MainLayout from '../../components/MainLayout';
import { useTypesSelector } from '../../hooks/useTypesSelectors';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchPost } from '../../store/action-creators/posts';
import { useState } from 'react';
import Modal from '../../components/Modal';
import { useActions } from '../../hooks/useActions';
import CommentForm from '../../components/CommentForm';
import CommentsList from '../../components/CommentsList';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 30px;
`

const Section = styled.div`
  padding: 20px;
  padding-right: 40px;
  border-radius: 7px;
  border: 1px solid gray;
  width: fit-content;
  min-width: 260px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`

const Info = styled.div`
  p, h3 {
      margin: 0 0 20px 15px;
      font-size: 17px;
  }
`

const Post = ({ id }) => {
    const post = useTypesSelector(state => state.posts.postDetails)
    const [modal, setModal] = useState(false)
    const { addCommentQuery } = useActions()
    
    const addComment = (text) => {
        addCommentQuery(text, id)
        setModal(true)
    }

    return (
        <MainLayout>
            <Wrapper>
                <Section>
                    <Info>
                        <span>Title:</span>
                        <h3>{post.title}</h3>
                        <span>Text:</span>
                        <p>{post.body}</p>
                    </Info>
                </Section>
                <Section>
                    <h3>Comments</h3>
                    <CommentForm submitHandler={addComment} />
                    <CommentsList comments={post.comments} />
                </Section>
            </Wrapper>
            <Modal open={modal} closeModal={() => setModal(false)} text="Комментарий добавлен" />
        </MainLayout>
    );
};

export default Post;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, params }) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchPost(params.postId))
    return {
        props: { id: params.postId }
    }
})