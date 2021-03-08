import React from 'react'
import Router from 'next/router'
import MainLayout from "../components/MainLayout/MainLayout";
import classes from '../styles/creators.module.scss'


const Creators = () => {

  const goHome = () => Router.push('/')
  const goRepos = () => Router.push('/repositories')

  return (
    <MainLayout>
      <h1 className={classes.creatorTitle}>Powered by Alex Horbunov</h1>
      <div className={classes.buttonContainer}>
        <a className="waves-effect waves-light btn" onClick={goRepos}>Go to repos</a>
        <a className="waves-effect waves-light btn" onClick={goHome}>Go Home</a>
        <a className="waves-effect waves-light btn" href={'https://github.com/Algoritm211/'} target={'_blank'}>Go to my Git</a>
      </div>
    </MainLayout>
  )
}

export default Creators


