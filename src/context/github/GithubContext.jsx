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


  // Gets initial users (testing purposes).
  const fetchUsers = async () => {
    setLoading()

    const response = await fetch(`https://api.github.com/users`, {
      headers: {
        Authorization: `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`
      },
    })
    const data = await response.json();

    console.log(data);
    //used for useState hook dont need because we are using useReducer below
    // setUsers(data)
    // setLoading(false)

    dispatch({
      type: 'GET_USERS',
      payload: data,
    })
  }

  //set loading
  const setLoading = () => dispatch({
    type: 'SET_LOADING',
  })

  return < GithubContext.Provider value={{
    users: state.users,
    loading: state.loading,
    fetchUsers
  }
  }>
    {children}
  </ GithubContext.Provider  >
}

export default GithubContext;