import '../styles/globals.css'
import React from "react";
import {Provider} from "react-redux";
import {useStore} from "../redux/redux-store";
import NextNProgress from "nextjs-progressbar";

const MyApp = ({Component, pageProps}) => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <React.Fragment>
      <NextNProgress
        color="white"
        startPosition={0.3}
        stopDelayMs={200}
        height="7"
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


export default MyApp;
