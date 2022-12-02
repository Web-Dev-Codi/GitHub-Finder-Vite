import { createContext, useReducer } from "react";
import GithubReducer from './GithubReducer'

const GithubContext = createContext();


export const GithubProvider = ({ children }) => {

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);


  // Gets search results
  const searchUsers = async (text) => {
    setLoading()

    const params = new URLSearchParams({
      q: text
    })

    const response = await fetch(`https://api.github.com/search/users?${params}`, {
      headers: {
        Authorization: `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`
      },
    })
    const { items } = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }
  // Get single user
  const getUser = async (login) => {
    setLoading()

    const response = await fetch(`https://api.github.com/users/${login}`, {
      headers: {
        Authorization: `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`
      },
    })

    if (response.status === 404) {
      window.location = '/notfound'
    } else {

      const data = await response.json();

      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }
  // get user repos
  const getUserRepos = async (login) => {
    setLoading()

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })

    const response = await fetch(`https://api.github.com/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `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`
      },
    })
    const data = await response.json();

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    })
  }
  //set loading
  const setLoading = () => dispatch({
    type: 'SET_LOADING',
  })


  //clear users from state
  const clearUsers = () => dispatch({
    type: 'CLEAR_USERS',
  })

  return < GithubContext.Provider value={{
    users: state.users,
    loading: state.loading,
    user: state.user,
    repos: state.repos,
    searchUsers,
    clearUsers,
    getUser,
    getUserRepos,
  }
  }>
    {children}
  </ GithubContext.Provider  >
}

export default GithubContext;