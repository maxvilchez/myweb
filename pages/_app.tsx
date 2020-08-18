import { AppProps } from "next/app";
import {
  DefaultTheme,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";
import Head from "next/head";

const theme: DefaultTheme = {
  colors: {
    primary: "#0070f3",
  },
};

const GlobalStyle = createGlobalStyle`  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
    line-height: 1.2;
    font-size: 1rem;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #0070f3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Dev: Maximiliano Vilchez</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
