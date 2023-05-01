import { Layout } from '@/components';
import { config } from '@/config';
import Image from 'next/image';
import { FC } from 'react';
import styles from '../styles/nosotros.module.css'

const Nosotros: FC = () => {
  return (
    <Layout
      title='Nosotros'
      description='Sob re nosotros, guitarLA, tienda de música'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image src={config.IMG.US} alt='img-nosotros' width={1000} height={800} />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
              explicabo consequatur minus necessitatibus impedit aut debitis eveniet
              temporibus sit recusandae, molestiae velit iste id at natus repellat
              magni ipsam dolores!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
              explicabo consequatur minus necessitatibus impedit aut debitis eveniet
              temporibus sit recusandae, molestiae velit iste id at natus repellat
              magni ipsam dolores!
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
