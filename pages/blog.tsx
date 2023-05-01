import { Layout, Post } from '@/components';
import { IPosts } from '@/interface/posts.interface';
import { FC } from 'react';
import styles from '@/styles/grid.module.css'

interface Props {
  posts: IPosts[];
}

const Blog: FC<Props> = ({ posts }) => {
  return (
    <Layout
      title='Blog'
      description='Blog de musica, venta de guitarras, consejos, GuitarLA'
    >
      <main className='contenedor'>
        <h1 className='heading'>Blog</h1>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} posts={post.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL }/posts?populate=imagen`);
  const { data: posts } = await res.json();

  return {
    props: {
      posts,
    },
  };
}
