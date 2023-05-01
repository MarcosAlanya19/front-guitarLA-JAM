import { Layout } from '@/components';
import { config } from '@/config';
import Image from 'next/image';
import { FC } from 'react';
import styles from '../styles/nosotros.module.css';

const Nosotros: FC = () => {
  return (
    <Layout
      title='Nosotros'
      description='Sob re nosotros, guitarLA, tienda de música'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image src={config.IMG.US} alt='img-nosotros' width={1000} height={1000} />
          <div>
            <p>
              Bienvenido a nuestra tienda de guitarras, donde encontrarás todo lo que
              necesitas para explorar tu pasión por la música. Somos una tienda
              especializada en guitarras de alta calidad y contamos con una amplia
              selección de modelos de marcas reconocidas en el mercado.
            </p>
            <p>
              Nuestro equipo de expertos está altamente capacitado para asesorarte en
              la elección de la guitarra perfecta para ti, ya seas principiante o
              músico experimentado. Ofrecemos una experiencia de compra personalizada
              y amigable, con un ambiente relajado y acogedor que te permitirá probar
              y comparar diferentes guitarras antes de tomar tu decisión.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
