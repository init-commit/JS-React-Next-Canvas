import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Greetings!👋  I'm thrilled to welcome you to my corner of the digital realm. I'm a dedicated and curious junior developer embarking on an exciting journey through the ever-evolving landscape of coding and software development. <br></br> <br></br>
          With a passion for crafting elegant solutions to complex problems, I find myself constantly captivated by the endless possibilities that the world of programming offers.</p>
        <p>
          See my first {' '}
          <Link href="/posts/first-post">post</Link>.
        </p>
      </section>
    </Layout>
  );
}
