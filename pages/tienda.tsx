import { Layout, ListadoGuitarras } from '@/components';
import { IGuitar } from '@/interface/products.interface';
import styles from '@/styles/grid.module.css';
import { FC } from 'react';

interface Props {
  guitarras: IGuitar[];
}

const Tienda: FC<Props> = ({ guitarras }) => {
  return (
    <Layout
      title='Tienda virtual'
      description='Tienda virtual, venta de guitarras, instrumentos, GuitarLA'
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        <div className={styles.grid}>
          {guitarras?.map((guitar) => (
            <ListadoGuitarras key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Tienda;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL }/guitarras?populate=imagen`);
  const { data: guitarras } = await res.json();

  return {
    props: {
      guitarras,
    },
  };
}

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL }/api/guitarras?populate=imagen`);
//   const { data: guitarras } = await res.json();

//   return {
//     props: {
//       guitarras,
//     },
//   };
// }
