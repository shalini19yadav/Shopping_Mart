import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = (props) => {

    let details=JSON.parse(localStorage.getItem('userDetails'))

    const [user, setuser] = useState({
        login:details? details.login:false,
        email:details? details.email:""
    });
    console.log(user)

  return (
    <UserContext.Provider value={{user,setuser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
