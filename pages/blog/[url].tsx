import { Layout } from '@/components';
import { IPosts } from '@/interface/posts.interface';
import styles from '@/styles/blog.module.css';
import { formatDate } from '@/utils/helpers';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  post: IPosts[];
}

const Post: FC<Props> = ({ post }) => {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes;
  const date = formatDate(publishedAt);

  return (
    <Layout title='' description=''>
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image
          src={imagen?.data.attributes.url}
          alt={`img-blog-${titulo}`}
          width={1000}
          height={600}
        />

        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{date}</p>
          <p className={styles.resumen}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
};

export default Post;

export async function getServerSideProps({ params: { url } }: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?filters[url]=${url}&populate=imagen`
  );
  const { data: post } = await res.json();
  console.log(post);

  return {
    props: {
      post,
    },
  };
}
