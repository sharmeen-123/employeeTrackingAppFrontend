import React from 'react'
import { useState } from 'react'
import { NavbarSimple } from './navbar'
import HeaderTabs from './header'
import { ManageUserCard } from './manageUserCards'
import { TableScrollArea } from './AllUsersTable'
import "./style.css";

const ManageUser = () => {
    const user = {
        name: "sharmeen",
        image: "sdfghjkl"
    }

    let data = [
        { id: "#1234", avtar: "zsxdcfgvbhjnmk", name: "sharmeen", email: "sharmeen@gmail.com", phone: "123456677", dateJoined: "2-Feb-2022", designation: "manager" },
        { id: "#1234", avtar: "zsxdcfgvbhjnmk", name: "sharmeen", email: "sharmeen@gmail.com", phone: "123456677", dateJoined: "2-Feb-2022", designation: "manager" },
        { id: "#1234", avtar: "zsxdcfgvbhjnmk", name: "sharmeen", email: "sharmeen@gmail.com", phone: "123456677", dateJoined: "2-Feb-2022", designation: "manager" },
        { id: "#1234", avtar: "zsxdcfgvbhjnmk", name: "sharmeen", email: "sharmeen@gmail.com", phone: "123456677", dateJoined: "2-Feb-2022", designation: "manager" },
    ]
    return (
        <div className="Body">
            <div className='nav-bar'>
                <NavbarSimple />
            </div>
            <div className={"sideBody"}>
                <div className='header'>
                    <HeaderTabs user={user} text={"Manage User"}/>
                </div>
                <div className='main'>
                    <div className={"cards"}>
                        <div><ManageUserCard /></div>
                        
                    </div>
                    <div className={"manage-user"}>
                        <TableScrollArea data={data} />
                    </div>
                </div>



            </div>
        </div>

    )
}

export default ManageUser

