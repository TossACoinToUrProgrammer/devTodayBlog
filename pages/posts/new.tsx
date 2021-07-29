import React from 'react';
import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core';

import MainLayout from '../../components/MainLayout';
import { useInput } from '../../hooks/useInput';
import { useActions } from '../../hooks/useActions';
import * as api from '../../api'
import { useTypesSelector } from '../../hooks/useTypesSelectors';
import Preloader from '../../components/Preloader';
import { useState } from 'react';
import Modal from '../../components/Modal';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 500px;
    button {
        max-width: 200px;
    }
`

const CreatePost = () => {
    const title = useInput()
    const body = useInput()
    const { toggleLoading } = useActions()
    const isLoading = useTypesSelector(state => state.posts.isLoading)

    const [modal, setModal] = useState(false)
    const closeModal = () => setModal(false)

    const submitHandler = async (e) => {
        e.preventDefault()

        toggleLoading(true)
        const result = await api.createPost({ title: title.value, body: body.value })
        if (result.id) setModal(true)
        title.setValue('')
        body.setValue('')
        toggleLoading(false)
    }

    return (
        <MainLayout>
            <h2>Create Post:</h2>
            <Form onSubmit={submitHandler}>
                <TextField size='small' label="Title" variant="outlined" required {...title} />
                <TextField size='small' label="Body" variant="outlined" required {...body} />
                <Button
                    type='submit'
                    color='primary'
                    variant="contained"
                    disabled={isLoading}>
                    {isLoading ? <Preloader /> : 'Post'}
                </Button>
            </Form>
            <Modal text='Пост успешно опубликован!' closeModal={closeModal} open={modal} />
        </MainLayout>
    );
};

export default CreatePost;