import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';


function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    // const response run async funtion here
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    // const hiddenVariables = {
    //   apikey: import.meta.env.VITE_API_KEY,
    //   token: import.meta.env.VITE_TOKEN,
    // }
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

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults;