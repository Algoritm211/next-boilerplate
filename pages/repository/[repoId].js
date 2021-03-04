import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import MainLayout from "../../components/MainLayout/MainLayout";

const Repository = () => {

  const router = useRouter()
  // console.log(router)

  return (
    <MainLayout title={`Repository - ${router.query.repoId}`}>
      <div>
        Repository with id - {router.query.repoId}
      </div>
    </MainLayout>
  );
};

export default Repository;
