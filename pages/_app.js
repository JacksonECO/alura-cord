
export default function MyApp({ Component, pageProps }) {
    // Código comum em todas as telas
    // Parece ser um componente global, e as tela ficam dentro deste

    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}


function GlobalStyle() {
    return (
        <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
}