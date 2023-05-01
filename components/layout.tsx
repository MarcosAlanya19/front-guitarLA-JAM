import { JSXElement } from '@/interface/types';
import Head from 'next/head';
import { FC } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface Props {
  children: JSXElement;
  title: string;
  description: string;
}

export const Layout: FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name='description' content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};
