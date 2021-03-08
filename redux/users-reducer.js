import {usersAPI} from "../api-req/users-api";

const LOAD_USERS_SUCCESS = 'users-reducer/LOAD_USERS_SUCCESS'
const LOAD_USER_SUCCESS = 'users-reducer/LOAD_USER_SUCCESS'

const initialState = {
  users: [],
  loading: false,
  currentUser: null
}


export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.users
      }
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.user
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

const setCurrentUser = (user) => {
  return {
    type: LOAD_USER_SUCCESS,
    user: user
  }
}


export const loadUsers = () => async (dispatch) => {
  const data = await usersAPI.getUsers()
  dispatch(setUsers(data))
}

export const loadOneUser = (id) => async (dispatch) => {
  const data = await usersAPI.getUser(id)

  dispatch(setCurrentUser(data))
}


