import React from 'react'
import Router from 'next/router'
import MainLayout from "../components/MainLayout/MainLayout";

const Creators = () => {

  const goHome = () => Router.push('/')
  const goRepos = () => Router.push('/repositories')

  return (
    <MainLayout>
      <h1>Powered by Alex Horbunov</h1>
      <div>
        <button onClick={goRepos}>Go to repos</button>
        <button onClick={goHome}>Go home</button>
      </div>
    </MainLayout>
  )
}

export default Creators


