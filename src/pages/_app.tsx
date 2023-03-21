import '@/styles/globals.css'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { Rubik, Oswald } from 'next/font/google';
import { ApolloProvider } from '@apollo/client';
import apolloClient from 'lib/apollo';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-rubik' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={apolloClient}>
    <style jsx global>
      {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
            --font-oswald: ${oswald.style.fontFamily};
          }
        `}
    </style>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ApolloProvider>
}

export default MyApp
