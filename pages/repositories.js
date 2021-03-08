import React, {useEffect} from 'react';
import MainLayout from "../components/MainLayout/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "../redux/users-reducer";
import {initializeStore} from "../redux/redux-store";
import Link from "next/link";
import classes from '../styles/repositories.module.scss'
import UserPreview from "../components/UserPreview/UserPreview";

const Repositories = () => {
  const users = useSelector(state => state.usersReducer.users)

  const usersBlock = users.map(user => {
    return (
      <UserPreview user={user} key={user.id} />
    )
  })

  return (
    <MainLayout title={'Repositories'}>
      <div className={classes.repoTitle}>
        Here you can see list of Repos)
      </div>
      <div>
        {usersBlock}
      </div>
    </MainLayout>
  );
};


export const getServerSideProps = async () => {
  const reduxStore = initializeStore()
  const {dispatch} = reduxStore

  await dispatch(loadUsers())

  return {props: {initialReduxState: reduxStore.getState()}}
}

export default Repositories
