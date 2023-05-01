import { config } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from '../styles/header.module.css';

export const Header: FC = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={config.ROUTES.INDEX}>
          <Image src={config.IMG.LOGO} alt='img-logo' width={300} height={40} />
        </Link>
        <nav className={styles.navegacion}>
          <Link
            className={router.pathname === config.ROUTES.INDEX ? styles.active : ''}
            href={config.ROUTES.INDEX}
          >
            Inicio
          </Link>
          <Link
            className={router.pathname === config.ROUTES.US ? styles.active : ''}
            href={config.ROUTES.US}
          >
            Nosotros
          </Link>
          <Link
            className={router.pathname === config.ROUTES.STORE ? styles.active : ''}
            href={config.ROUTES.STORE}
          >
            Tienda
          </Link>
          <Link
            className={router.pathname === config.ROUTES.BLOG ? styles.active : ''}
            href={config.ROUTES.BLOG}
          >
            Blog
          </Link>
          <Link
            className={router.pathname === config.ROUTES.CART ? styles.active : ''}
            href={config.ROUTES.CART}
          >
            <Image src={config.IMG.CART} alt='img-carrito' width={30} height={25} />
          </Link>
        </nav>
      </div>
    </header>
  );
};
