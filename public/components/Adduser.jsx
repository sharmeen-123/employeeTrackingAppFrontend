import React from 'react'
import { useState } from 'react'
import { NavbarSimple } from './navbar'
import HeaderTabs from './header'
import AddUserform from './addUserform'
import "./style.css";

const Adduser = () => {
  const user= {
    name: "sharmeen",
    image: "sdfghjkl"
  }

  const current = {
    completed: 200,
    assigned: 100,
    unassigned: 50
  }
  const completed = {
    completed:300,
    assigned: 100,
    unassigned: 50
  }
  return (
    <div className="Body">
        <div className='nav-bar'>
        <NavbarSimple/>
        </div>
   <div className={"sideBody"}>
        <div className='header'>
        <HeaderTabs user={user}/>
        </div>
        <div className='main'>
        <AddUserform/>
       
        </div>
        
        
      
    </div>
    </div>
    
  )
}

export default Adduser
