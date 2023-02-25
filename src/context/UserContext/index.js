import React from 'react'

const UserContext = React.createContext({
  username: '',
  password: '',
  changeUsername: () => {},
  changePassword: () => {},
})

export default UserContext
