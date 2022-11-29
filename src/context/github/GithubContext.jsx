import { createContext, useReducer } from "react";
import GithubReducer from './GithubReducer'

const GithubContext = createContext();

// const GITHUB_URL = `https://api.github.com/`;
// const GITHUB_TOKEN = `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`;



export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  const initialState = {
    users: [],
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
    searchUsers,
    clearUsers,
  }
  }>
    {children}
  </ GithubContext.Provider  >
}

export default GithubContext;