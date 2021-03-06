import React, {useEffect} from 'react';
import MainLayout from "../components/MainLayout/MainLayout";
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "../redux/users-reducer";
import {initializeStore} from "../redux/redux-store";

const Repositories = () => {
  // const dispatch = useDispatch()
  const users = useSelector(state => state.usersReducer.users)

  const usersBlock = users.map(user => {
    return (
      <div key={user.id}>{user.name}</div>
    )
  })

  return (
    <MainLayout title={'Repositories'}>
      <div>
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

  return { props: { initialReduxState: reduxStore.getState() } }
}

export default Repositories
