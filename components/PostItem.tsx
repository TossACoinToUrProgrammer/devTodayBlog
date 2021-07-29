import React from 'react';
import { IPost } from '../types';
import styled from 'styled-components'
import Link from 'next/link';

interface PropTypes {
    post: IPost
}

const CardWrapper = styled.div`
    padding: 1px;
    border-radius: 7px;
    background: linear-gradient(90deg, rgba(125,165,238,1) 35%, rgba(0,212,255,1) 100%);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    `

const Card = styled.div`
    position: relative;
    overflow: hidden;
    max-width: 500px;
    min-width: 200px;
    max-height: 300px;
    height: 100%;
    padding: 5px 20px 30px;
    background: white;
    
    border-radius: 7px;

    a {
        position: absolute;
        z-index: 2;
        bottom: 10px;
        color: cornflowerblue;
    }
    p {
        padding: 0 5px;
    }
`

const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  top: 140px;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 60px;
  margin-top: 100px;
  background: linear-gradient(rgba(255, 255, 255, 0.172) 15%, white, white, white, white);
`

const PostItem: React.FC<PropTypes> = ({ post }) => {
    return (
        <CardWrapper>
            <Card>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <Link href={'/posts/' + post.id}> learn more </Link>
                <BottomGradient />
            </Card>
        </CardWrapper>
    );
};

export default PostItem;