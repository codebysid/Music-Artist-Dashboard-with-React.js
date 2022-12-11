import { Avatar } from '@mui/material'
import React from 'react'
import charliePuthDP from '../assets/charliePuthDP.webp'
import "../styling/Profile.css"

export const Profile = () => {
  return (
    <div className="welcomeGrandParent">
      <div className="welcomeAndProfile">
        <div className="welcome">
          <h2>
            Welcome To Your 
            <span className="dashboardWord">
                DashBoard
            </span>
          </h2>
        </div>
        <div className="profile">
          <p className="profileName">Charlie Puth</p>
          <Avatar 
          src={charliePuthDP}
          />
        </div>
      </div>
    </div>
  );
}
