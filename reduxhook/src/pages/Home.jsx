import React from 'react'
import "../style/Navbar.css"
import Profile from './Profile'


export default function Home() {
  return (
    <div className = "homepage" style={{display:"flex",justifyContent:"space-around"}}>
      <div>

        <Profile />
      </div>

      <div>

        <Profile />
      </div>

      <div>

<Profile />
</div>

    </div>

  )
}
