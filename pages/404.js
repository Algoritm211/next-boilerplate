import React from 'react';
import MainLayout from "../components/MainLayout/MainLayout";
import Link from "next/link";
import classes from '../styles/notFound.module.scss'

const ErrorPage = () => {
  return (
    <MainLayout title={'Error'}>
      <h2 className={classes.errorTitle}>404 Not Found</h2>
      <Link href={'/'}>
        <a className={classes.errorLink}>
          Go to home page
        </a>
      </Link>
    </MainLayout>
  );
};

export default ErrorPage;
