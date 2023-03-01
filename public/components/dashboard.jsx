import React from 'react'
import { useState } from 'react'
import { NavbarSimple } from './navbar'
import HeaderTabs from './header'
import { DashboardCard } from './dashboardCards'
import { StatsRingCard } from './projectUpdateCard'
import {EmployeeActivityGraph} from "./EmployeeActivityGraph"
import "./style.css";

const Dashboard = () => {
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
        <div className={"cards"}>
        <DashboardCard/>
        </div>
        <div className={"dashboard"}>
            <div className={"graph"}>
                <h2>Employee Activity</h2>
            <EmployeeActivityGraph/> 
            </div>
            <div className={"stats"}>
                <div className="text">
                <h2>Current Project</h2>
                <h2>New Project</h2>
                </div>
            <StatsRingCard completed={completed} current={current}/>
            </div>
        </div>
        </div>
        
        
      
    </div>
    </div>
    
  )
}

export default Dashboard
