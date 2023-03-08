import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Rubik, Oswald } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-rubik' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>
      {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
            --font-oswald: ${oswald.style.fontFamily};
          }
        `}
    </style>
    <Component {...pageProps} />
  </>
}

export default MyApp
