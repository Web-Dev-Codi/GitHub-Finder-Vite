import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-14 h-14">
            <img src={avatar_url} alt="avatar" />
          </div>
          <h2 className="card-title ml-2">
            {login}
          </h2>
          <Link
            to={`/users/${login}`}
            className="text-base-content text-opacity-40">
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem