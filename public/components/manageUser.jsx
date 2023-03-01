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
                    <HeaderTabs user={user} />
                </div>
                <div className='main'>
                    <div className={"cards"}>
                        <div><ManageUserCard /></div>
                        <div className='btn'>
                            <button >
                                <div className='search-button'>
                                    <div className='img'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.25 8.125C16.25 9.91797 15.668 11.5742 14.6875 12.918L19.6328 17.8672C20.1211 18.3555 20.1211 19.1484 19.6328 19.6367C19.1445 20.125 18.3516 20.125 17.8633 19.6367L12.918 14.6875C11.5742 15.6719 9.91797 16.25 8.125 16.25C3.63672 16.25 0 12.6133 0 8.125C0 3.63672 3.63672 0 8.125 0C12.6133 0 16.25 3.63672 16.25 8.125ZM8.125 13.75C8.86369 13.75 9.59514 13.6045 10.2776 13.3218C10.9601 13.0391 11.5801 12.6248 12.1025 12.1025C12.6248 11.5801 13.0391 10.9601 13.3218 10.2776C13.6045 9.59514 13.75 8.86369 13.75 8.125C13.75 7.38631 13.6045 6.65486 13.3218 5.97241C13.0391 5.28995 12.6248 4.66985 12.1025 4.14752C11.5801 3.62519 10.9601 3.21086 10.2776 2.92818C9.59514 2.6455 8.86369 2.5 8.125 2.5C7.38631 2.5 6.65486 2.6455 5.97241 2.92818C5.28995 3.21086 4.66985 3.62519 4.14752 4.14752C3.62519 4.66985 3.21086 5.28995 2.92818 5.97241C2.64549 6.65486 2.5 7.38631 2.5 8.125C2.5 8.86369 2.64549 9.59514 2.92818 10.2776C3.21086 10.9601 3.62519 11.5801 4.14752 12.1025C4.66985 12.6248 5.28995 13.0391 5.97241 13.3218C6.65486 13.6045 7.38631 13.75 8.125 13.75Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p>Search</p>
                                    </div>

                                </div>
                            </button>
                            <button className='add-user'>
                                <div className='search-button'>
                                    <div className='img'>
                                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.85 4.25C2.85 3.25544 3.25036 2.30161 3.96299 1.59835C4.67563 0.895088 5.64218 0.5 6.65 0.5C7.65782 0.5 8.62437 0.895088 9.33701 1.59835C10.0496 2.30161 10.45 3.25544 10.45 4.25C10.45 5.24456 10.0496 6.19839 9.33701 6.90165C8.62437 7.60491 7.65782 8 6.65 8C5.64218 8 4.67563 7.60491 3.96299 6.90165C3.25036 6.19839 2.85 5.24456 2.85 4.25ZM0 14.6299C0 11.7441 2.36906 9.40625 5.29328 9.40625H8.00672C10.9309 9.40625 13.3 11.7441 13.3 14.6299C13.3 15.1104 12.9052 15.5 12.4183 15.5H0.881719C0.394844 15.5 0 15.1104 0 14.6299ZM14.9625 9.64062V7.76562H13.0625C12.6677 7.76562 12.35 7.45215 12.35 7.0625C12.35 6.67285 12.6677 6.35938 13.0625 6.35938H14.9625V4.48438C14.9625 4.09473 15.2802 3.78125 15.675 3.78125C16.0698 3.78125 16.3875 4.09473 16.3875 4.48438V6.35938H18.2875C18.6823 6.35938 19 6.67285 19 7.0625C19 7.45215 18.6823 7.76562 18.2875 7.76562H16.3875V9.64062C16.3875 10.0303 16.0698 10.3438 15.675 10.3438C15.2802 10.3438 14.9625 10.0303 14.9625 9.64062Z" fill="white" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p>AddUser</p>
                                    </div>

                                </div>
                            </button>
                        </div>
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

