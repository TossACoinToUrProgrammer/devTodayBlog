import React from "react"
import "../styles/globals.css"
import { wrapper } from "../store/index"
import NextNprogress from 'nextjs-progressbar';


const WrappedApp: React.FC<any> = ({ Component, pageProps }): any => {
  return <>
    <NextNprogress
      color="#c03c85c6"
      startPosition={0.3}
      stopDelayMs={200}
      height={7}
      showOnShallow={true}
    />
    <Component {...pageProps} /></>
};

export default wrapper.withRedux(WrappedApp)
