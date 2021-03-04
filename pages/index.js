import React from 'react'
import Link from "next/link";
import Head from "next/head";

const HomePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>My Next Home</title>
      </Head>
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
    </React.Fragment>
  )
}


export default HomePage
