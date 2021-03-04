import React from 'react';
import Link from "next/link";
import Head from "next/head";

const MainLayout = ({children, title = 'My Next'}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet={'UTF-8'}/>
      </Head>
      <div>
        <nav>
          <Link href={'/creators'}>Creator of site</Link>
          <Link href={'/repositories'}>Repositories</Link>
        </nav>
        <main>
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
