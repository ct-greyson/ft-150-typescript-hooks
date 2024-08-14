import React, { useState } from 'react'

interface User {
    name: string,
    email: string
}

const UserComponent = () => {
    // we can either have a defined User or we can have null (no user)
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = () => {
    const genericUser: User = {
        name: "Jen",
        email: "jen@email.jen"
    }
    setUser(genericUser)
  }

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <>
        <h1>User Login: </h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        {/* optional chaining - will only access/display the property if our state isn't null */}
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email} </p>
    </>
  )
}

export default UserComponent