import React from 'react';
import { useInput } from '../hooks/useInput';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';
import { useTypesSelector } from '../hooks/useTypesSelectors';
import Preloader from './Preloader';

const Form = styled.form`
   display: flex;
   gap: 20px;
   button {
       height: 40px;
   }
`

interface PropTypes { submitHandler: (text: string) => void }

const CommentForm: React.FC<PropTypes> = ({ submitHandler }) => {
    const isLoading = useTypesSelector(state => state.posts.isLoading)
    const comment = useInput()

    const onSubmitHandler = (e) => {
        e.preventDefault()

        submitHandler(comment.value)
        comment.setValue('')
    }

    return (
            <Form onSubmit={onSubmitHandler}>
                <TextField size='small' label="Type Comment" variant="outlined" required {...comment} />
                <Button
                    type='submit'
                    color='primary'
                    variant="contained"
                    disabled={isLoading}>
                    {isLoading ? <Preloader /> : 'Post'}
                </Button>
            </Form>
    );
};

export default CommentForm;