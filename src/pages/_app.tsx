import type { AppProps } from 'next/app';
import '../styles/components.css';
import '../styles/index.css';
import '../styles/positioning.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
