import "../styles/globals.css"
import { wrapper } from "../store/index"
import React from "react"

const WrappedApp: React.FC<any> = ({ Component, pageProps }): any => {
  return <Component {...pageProps} />
};

export default wrapper.withRedux(WrappedApp)
