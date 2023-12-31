/**
 * First, we’ll create a page called [id].js under pages/posts.
 * Pages that begin with [ and end with ] are dynamic routes in Next.js.
 * In pages/posts/[id].js, we’ll write code that will render a post page
 * 
 * Step 2:
 * We’ll export an async function called getStaticPaths from this page. 
 * In this function, we need to return a list of possible values for id.
 * 
 * Step 3:
 * Finally, we need to implement getStaticProps again - this time, 
 * to fetch necessary data for the blog post with a given id.
 * getStaticProps is given params, which contains id (because the file name is [id].js).
 * 
 */

import utilStyles from '../../styles/utils.module.css';
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from '../../components/date';

export async function getStaticPaths() {
    // return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}
