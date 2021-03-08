import React from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import MainLayout from "../../components/MainLayout/MainLayout";
import {initializeStore} from "../../redux/redux-store";
import {loadOneUser} from "../../redux/users-reducer";
import UserRepository from "../../components/UserRepository/UserRepository";

const Repository = ({user}) => {

  const router = useRouter()

  const userBlockInfo = <UserRepository user={user} />

  return (
    <MainLayout title={`${user.name}`}>
      <div>
        {userBlockInfo}
      </div>
    </MainLayout>
  );
};


export const getServerSideProps = async ({query}) => {
  const reduxStore = initializeStore()
  const {dispatch} = reduxStore

  await dispatch(loadOneUser(query.repoId))
  const user = reduxStore.getState().usersReducer.currentUser
  return {
    props: {
      user: user
    }
  }
}

export default Repository;
