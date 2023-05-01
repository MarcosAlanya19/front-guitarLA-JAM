import { Layout } from '@/components';
import { config } from '@/config';
import Link from 'next/link';
import { FC } from 'react'

const Page404: FC = () => {
  return (
    <Layout
      title='Pagina no Encontrada'
      description=''
    >
      <p className='error'>Pagina no Encontrada</p>
      <Link className='error-enlace' href={config.ROUTES.INDEX}>Ir a Inicio</Link>
    </Layout>
  );
}

export default Page404;
