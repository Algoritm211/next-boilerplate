import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";

const Repository = () => {

  const router = useRouter()
  // console.log(router)

  return (
    <React.Fragment>
      <Head>
        <title>Repository - {router.query.repoId}</title>
      </Head>
      <div>
        Repository with id - {router.query.repoId}
      </div>
    </React.Fragment>
  );
};

export default Repository;
