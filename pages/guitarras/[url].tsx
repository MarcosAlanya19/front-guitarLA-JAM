import { Layout } from '@/components';
import { IGuitar } from '@/interface/products.interface';
import styles from '@/styles/guitarras.module.css';
import Image from 'next/image';
import { FC, FormEvent, useState } from 'react';

interface Props {
  guitarra: IGuitar[];
  agregarCarrito: (e: ICarrito)=> void
}

const Producto: FC<Props> = ({ guitarra, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState<number>(0);
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert('Cantidad no valida');
      return;
    }

    // Construir objeto
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };

    // Pasando la informacion al Context
    agregarCarrito(guitarraSeleccionada)
  };

  return (
    <Layout title={`Guitarra ${nombre}`} description='guitarra'>
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

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor='cantidad'>Cantidad:</label>
            <select onChange={(e) => setCantidad(+e.target.value)} id='cantidad'>
              <option value='0'>--Seleccione--</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>

            <input type='submit' value='Agregar al carrito' />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Producto;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitarras`);
  const { data } = await res.json();
  const paths = data.map((guitarra: IGuitar) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await res.json();

  return {
    props: {
      guitarra,
    },
  };
}
