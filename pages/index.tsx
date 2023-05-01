import { Curso, Layout, ListadoGuitarras, Post } from '@/components';
import { ICurso } from '@/interface/curso.interface';
import { IPosts } from '@/interface/posts.interface';
import { IGuitar } from '@/interface/products.interface';
import styles from '@/styles/grid.module.css';

interface Props {
  guitarras: IGuitar[];
  posts: IPosts[];
  curso: ICurso;
}

export default function Home({ guitarras, posts, curso }: Props) {
  return (
    <>
      <Layout title='Inicio' description='Blog de música, venta de guitarras y más'>
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <div className={styles.grid}>
            {guitarras?.map((guitarra) => (
              <ListadoGuitarras key={guitarra.id} guitar={guitarra.attributes} />
            ))}
          </div>
        </main>

        <Curso curso={curso.attributes} />

        <section className='contenedor'>
          <h2 className='heading'>Blog</h2>
          <div className={styles.grid}>
            {posts?.map((post) => (
              <Post key={post.id} posts={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.NEXT_PUBLIC_API_URL }/guitarras?populate=imagen`;
  const urlPosts = `${process.env.NEXT_PUBLIC_API_URL }/posts?populate=imagen`;
  const urlCurso = `${process.env.NEXT_PUBLIC_API_URL }/curso?populate=imagen`;

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso),
  ]);

  const [{ data: guitarras }, { data: posts }, { data: curso }] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json(),
  ]);

  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  };
}
