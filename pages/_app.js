import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

    let title;
  switch (router.pathname) {
    case '/contact':
      title = 'Dev.Bin Portfolio - Contact';
      break;
    case '/services':
      title = 'Dev.Bin Portfolio - Services';
      break;
    case '/about':
      title = 'Dev.Bin Portfolio - About';
      break;
    case '/work':
      title = 'Dev.Bin Portfolio - Project';
      break;
    default:
      title = 'Dev.Bin Portfolio';
  }

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  ); 
}

export default MyApp;
