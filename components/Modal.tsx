import React from 'react';
import { Alert, Snackbar } from '@material-ui/core';

const Modal = ({ open, closeModal, text, error = false }) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={closeModal}>
            <Alert onClose={closeModal} severity={error ? 'error' : 'success'}>
                {text}
            </Alert>
        </Snackbar>
    );
};

export default Modal;