import {usersAPI} from "../api/users-api";

const LOAD_USERS_SUCCESS = 'users-reducer/LOAD_USERS_SUCCESS'

const initialState = {
  users: [],
  loading: false
}


export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}

const setUsers = (users) => {
  return {
    type: LOAD_USERS_SUCCESS,
    users: users
  }
}


export const loadUsers = () => async (dispatch) => {
  const data = await usersAPI.getUsers()
  dispatch(setUsers(data))
}


