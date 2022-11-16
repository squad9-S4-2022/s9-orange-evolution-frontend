import '../styles/globals.css';
import Layout from '../components/Layout/layout';
import { CoursesProvider } from '../context/CourseAPI';

function MyApp({ Component, pageProps }) {
  return (
    <CoursesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CoursesProvider>
  );
}

export default MyApp;
