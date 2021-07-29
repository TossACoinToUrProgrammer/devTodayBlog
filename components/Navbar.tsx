import React from "react"
import Link from "next/link"
import styled from 'styled-components'
import { Container } from "./MainLayout"

const Wrapper = styled.div`
  padding: 20px 0;
  background: linear-gradient(90deg, rgba(125,165,238,1) 35%, rgba(0,212,255,1) 100%);
  position: relative;
  z-index: 2;
`

const Links = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;
  a {
    margin-right: 45px;
  }
`

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Links>
          <Link href="/">Posts</Link>
          <Link href="/posts/new">Create Post</Link>          
        </Links>
      </Container>
    </Wrapper>
  )
}

export default Navbar