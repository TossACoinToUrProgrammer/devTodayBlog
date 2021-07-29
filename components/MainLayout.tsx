import React from "react"
import Navbar from "./Navbar"
import Head from "next/head"
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1170px;
  padding: 15px;
  margin: 0 auto;
`

const MainLayout: React.FC = ({ children }) => {
    return (
        <>
            <Head>
                {/* <meta keywords="ulbi tv, arlenm" /> */}
                <title>Blog App</title>
            </Head>
            <Navbar />
            <Container>
                <div>{children}</div>
            </Container>
        </>
    )
}

export default MainLayout