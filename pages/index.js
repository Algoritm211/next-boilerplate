import React from 'react'
import Link from "next/link";
import MainLayout from "../components/MainLayout/MainLayout";
import classes from '../styles/HomePage.module.scss'

const HomePage = () => {
  return (
    <MainLayout title={'Main Page'}>
      <div>
        <h1 className={classes.mainTitle}>
          Hello, Next Developers and others
        </h1>
        <div className={classes.section}>
          <div className={classes.title}>Primary goal</div>
          <div className={classes.sectionContent}>
            Hi, my name is Alexey. I am a web developer from Ukraine. I created a mini-application on Next for understanding SSR, as well as training in working with JavaScript.
          </div>
        </div>

        <div className={classes.section}>
          <div className={classes.title}>What`s next?</div>
          <div className={classes.sectionContent}>
            Then you can go to the <Link href={'/repositories'}>repositories</Link>, as well as to my page in the <a href={'https://github.com/Algoritm211/'}>GitHub</a> :)</div>
        </div>
      </div>
    </MainLayout>
  )
}


export default HomePage
