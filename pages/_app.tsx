import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import client from "../lib/apollo-client";


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <ApolloProvider client={client}>
      {/* <GoogleReCaptchaProvider
        reCaptchaKey="6Lf4APYmAAAAAGtvwO5HOsYcQWfckpaL9G-tQxUk"
        scriptProps={{
          async: true, // optional, default to false,
          defer: true, // optional, default to false
          appendTo: 'head', // optional, default to "head", can be "head" or "body",
          nonce: undefined // optional, default undefined
        }}
        container={{ // optional to render inside custom element
          // element: "google_recaptcha_element", // optional, default undefined
          parameters: {
            badge: 'bottomright', // optional, default undefined
            theme: 'dark', // optional, default undefined
          }
        }}
      > */}
      <Component {...pageProps} />
      {/* </GoogleReCaptchaProvider>, */}
    </ApolloProvider>
  </>)

}

export default MyApp;
