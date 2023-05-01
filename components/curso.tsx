import { ICursoAttributes } from '@/interface/curso.interface';
import styles from '@/styles/curso.module.css';
import { FC } from 'react';

interface Props {
  curso: ICursoAttributes;
}

export const Curso: FC<Props> = ({ curso }) => {
  const { contenido, imagen, titulo } = curso;

  return (
    <section className={`${styles.curso} curso`}>
      <style jsx>
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0/0.65),
                rgb(0 0 0/0.7)
              ),
              url(${imagen.data.attributes.url});
          }
        `}
      </style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className='heading'>{titulo}</h2>
          <p>{contenido}</p>
        </div>
      </div>
    </section>
  );
};
