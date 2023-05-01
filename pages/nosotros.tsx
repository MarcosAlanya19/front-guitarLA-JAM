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
          <Image src={config.IMG.US} alt='img-nosotros' width={1000} height={800} />
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
            <p>
              Además de guitarras, también contamos con accesorios esenciales para
              guitarristas, como cuerdas, púas, afinadores, amplificadores, efectos y
              mucho más. Siempre estamos actualizados con las últimas tendencias y
              novedades en el mercado para que puedas encontrar lo que buscas.
            </p>
            <p>
              Nos apasiona la música y estamos comprometidos en brindar la mejor
              atención y servicio a nuestros clientes. Ven a visitarnos y descubre
              todo lo que nuestra tienda de guitarras tiene para ofrecerte.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
