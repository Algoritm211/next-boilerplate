import React from 'react';
import Link from "next/link";
import Head from "next/head";
import '../../styles/Home.module.css'
import classes from './MainLayout.module.scss'

const MainLayout = ({children, title = 'My Next'}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet={'UTF-8'}/>
      </Head>
      <div>
        <nav className={classes.mainNav}>
          <Link href={'/'}>Main</Link>
          <Link href={'/repositories'}>Repositories</Link>
          <Link href={'/creators'}>Creator of site</Link>
        </nav>
        <main>
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
