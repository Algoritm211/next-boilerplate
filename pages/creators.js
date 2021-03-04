import React from 'react'
import Router from 'next/router'

const Creators = () => {

  const goHome = () => Router.push('/')
  const goRepos = () => Router.push('/repositories')

  return (
    <React.Fragment>
      <h1>Powered by Alex Horbunov</h1>
      <div>
        <button onClick={goRepos}>Go to repos</button>
        <button onClick={goHome}>Go home</button>
      </div>
    </React.Fragment>
  )
}

export default Creators


