import React from "react"
import "../styles/globals.css"
import { wrapper } from "../store/index"
import NextNprogress from 'nextjs-progressbar';
import { useSelector } from "react-redux";
import { useTypesSelector } from "../hooks/useTypesSelectors";
import Modal from "../components/Modal";


const WrappedApp: React.FC<any> = ({ Component, pageProps }): any => {
  const error = useTypesSelector(state => state.posts.error)
  return <>
    {error && <Modal open={error} text={error} closeModal={() => {}} error={true} />}
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
