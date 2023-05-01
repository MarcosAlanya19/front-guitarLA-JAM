import { config } from '@/config';
import { IGuitarAttributes } from '@/interface/products.interface';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from '@/styles/guitarras.module.css';

interface Props {
  guitar: IGuitarAttributes;
}

export const ListadoGuitarras: FC<Props> = ({ guitar }) => {
  const { descripcion, imagen, precio, url, nombre } = guitar;

  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        alt={`img-guitar-${nombre}`}
        width={600}
        height={400}
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link className={styles.enlace} href={`${config.ROUTES.GUITARS}/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
};
