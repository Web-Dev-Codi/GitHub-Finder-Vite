import React from 'react'
import { useEffect, useState } from 'react'


function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const response run async funtion here
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/users`, {
      headers: {
        Authorization: `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`
      },
    })
    const data = await response.json();

    setUsers(data)
    setLoading
  }


  return (
    <>
      {/* Search Component */}
      UserResults
    </>
  )
}

export default UserResults;