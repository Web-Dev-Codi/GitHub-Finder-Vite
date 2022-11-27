import { createContext, useState } from "react";

const GithubContext = createContext();

// const GITHUB_URL = `https://api.github.com/`;
// const GITHUB_TOKEN = `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`;



export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/users`, {
      headers: {
        Authorization: `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`
      },
    })
    const data = await response.json();

    console.log(data);

    setUsers(data)

    setLoading(false)
  }

  return < GithubContext.Provider value={{
    users,
    loading,
    fetchUsers
  }
  }>
    {children}
  </ GithubContext.Provider  >
}

export default GithubContext;