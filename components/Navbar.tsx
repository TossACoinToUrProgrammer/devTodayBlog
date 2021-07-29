import React from "react"
import Link from "next/link"
import styled from 'styled-components'
import { Container } from "./MainLayout"

const Wrapper = styled.div`
  padding: 20px 0;
  background-color: cornflowerblue;
`

const Links = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;

  a {
    margin-right: 25px;
  }
`

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Links>
          <Link href="/">Posts List</Link>
          <Link href="/posts/new">New Post</Link>          
        </Links>
      </Container>
    </Wrapper>
  )
}

export default Navbar