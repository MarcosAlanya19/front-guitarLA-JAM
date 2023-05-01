import { config } from '@/config';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/footer.module.css'

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href={config.ROUTES.INDEX}>Inicio</Link>
          <Link
            href={config.ROUTES.US}
          >
            Nosotros
          </Link>
          <Link
            href={config.ROUTES.STORE}
          >
            Tienda
          </Link>
          <Link
            href={config.ROUTES.BLOG}
          >
            Blog
          </Link>
        </nav>
        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
