import { config } from '@/config';
import { IPostsAttributes } from '@/interface/posts.interface';
import styles from '@/styles/blog.module.css';
import { formatDate } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  posts: IPostsAttributes;
}

export const Post: FC<Props> = ({ posts }) => {
  const { contenido, imagen, titulo, url, publishedAt } = posts;
  const date = formatDate(publishedAt);

  return (
    <article>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`img-blog-${titulo}`}
        width={600}
        height={400}
      />

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{date}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className={styles.enlace} href={`${config.ROUTES.BLOG}/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
};
