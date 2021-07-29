import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 20px 0 40px;
`

const Item = styled.div`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 7px;
  overflow-wrap: break-word;
`

const CommentsList = ({ comments = [] }) => {
    return (
        <List>
            {comments.length ? <span></span> : <span>No comment yet</span>}
            {comments.map(comment => <Item key={comment.id}>{comment.body}</Item>)}
        </List>
    );
};

export default CommentsList;