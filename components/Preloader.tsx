import React from 'react';
import styled from 'styled-components'
import loaderGIF from '../img/loader.gif'
import Image from 'next/image'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
      width: auto;
      height: 30px;
      max-height: 100%;
  }
`

const Preloader: React.FC = () => {
    return (
        <Container>
            <Image src={loaderGIF} alt="loading icon" />
        </Container>
    );
};

export default Preloader;