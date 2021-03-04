import React from 'react'
import Link from "next/link";
import Head from "next/head";
import MainLayout from "../components/MainLayout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout title={'Main Page'}>
      <div>
        <h1>
          Hello, Next
        </h1>
        <div>
          <Link href={'/creators'}>Creator of site</Link>
        </div>
        <div>
          <Link href={'/repositories'}>Repositories</Link>
        </div>
      </div>
    </MainLayout>
  )
}


export default HomePage
