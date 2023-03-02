import React from 'react'
import { useState } from 'react'
import { NavbarSimple } from './navbar'
import HeaderTabs from './header'
import { PendingPaymentCard } from './pendingPaymentCard'

import "./style.css";

const PaymentAndBilling = () => {
    const [paid, setPaid] = useState(false);
    const user = {
        name: "sharmeen",
        image: "sdfghjkl"
    }

    const author = [
        {
            name: " John Smith",
            image: " sdfghjkl",
            designation: " site worker",
            location: "Adisoke, Ottawa Public Library",
            startingTime: " 12:09:34",
            endingTime: " 12:09:34",
            activeTime: " 6 hrs 14 mins",
            HourlyWage: " 17 $"
        },
        {
            name: "John Smith",
            image: "sdfghjkl",
            designation: "site worker",
            location: "Adisoke, Ottawa Public Library",
            startingTime: "12:09:34",
            endingTime: "12:09:34",
            activeTime: "6 hrs 14 mins",
            HourlyWage: "17 $"
        },
        {
            name: "John Smith",
            image: "sdfghjkl",
            designation: "site worker",
            location: "Adisoke, Ottawa Public Library",
            startingTime: "12:09:34",
            endingTime: "12:09:34",
            activeTime: "6 hrs 14 mins",
            HourlyWage: "17 $"
        },
        {
            name: "John Smith",
            image: "sdfghjkl",
            designation: "site worker",
            location: "Adisoke, Ottawa Public Library",
            startingTime: "12:09:34",
            endingTime: "12:09:34",
            activeTime: "6 hrs 14 mins",
            HourlyWage: "17 $"
        },
        {
            name: "John Smith",
            image: "sdfghjkl",
            designation: "site worker",
            location: "Adisoke, Ottawa Public Library",
            startingTime: "12:09:34",
            endingTime: "12:09:34",
            activeTime: "6 hrs 14 mins",
            HourlyWage: "17 $"
        },
        {
            name: "John Smith",
            image: "sdfghjkl",
            designation: "site worker",
            location: "Adisoke, Ottawa Public Library",
            startingTime: "12:09:34",
            endingTime: "12:09:34",
            activeTime: "6 hrs 14 mins",
            HourlyWage: "17 $"
        },
        {
            name: "John Smith",
            image: "sdfghjkl",
            designation: "site worker",
            location: "Adisoke, Ottawa Public Library",
            startingTime: "12:09:34",
            endingTime: "12:09:34",
            activeTime: "6 hrs 14 mins",
            HourlyWage: "17 $"
        },
        {
            name: "John Smith",
            image: "sdfghjkl",
            designation: "site worker",
            location: "Adisoke, Ottawa Public Library",
            startingTime: "12:09:34",
            endingTime: "12:09:34",
            activeTime: "6 hrs 14 mins",
            HourlyWage: "17 $"
        },
    ]

    return (
        <div className="Body">
            <div className='nav-bar'>
                <NavbarSimple />
            </div>
            <div className={"sideBody"}>
                <div className='header'>
                    <HeaderTabs user={user} text={"Payment And Billing"}/>
                </div>
                <div className='main'>
                    <div className='payment-Billing'>
                        <div onClick={() => setPaid(false)}>
                            <h2>Pending payments</h2>
                        </div>

                        <div onClick={() => setPaid(true)}>
                            <h2>Paid</h2>
                        </div>
                    </div>
                    <div className='paid'>
                        {paid === false ? (<>
                            <div className='billing'>
                                {/* <svg width="600" height="9" viewBox="0 0 749 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="600" height="9" rx="4.5" fill="#7DD190" />
                                </svg> */}
                            </div>
                            <div></div>
                        </>) : (<>
                            <div></div>
                            <div className='paidd'>
                                {/* <svg width="600" height="9" viewBox="0 0 749 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="600" height="9" rx="4.5" fill="#7DD190" />
                                </svg> */}
                            </div>
                        </>)}
                    </div>
                    {paid === false?(<>
                        <div className='pending-users'>
                        {author.map((val, ind) => (
                            <div>
                                <PendingPaymentCard author={val} pending={true}/>
                            </div>
                        ))}
                    </div>
                    </>):(<>
                        <div className='pending-users'>
                        {author.map((val, ind) => (
                            <div>
                                <PendingPaymentCard author={val} pending={false} TotalWage={" 107 $"}/>
                            </div>
                        ))}
                    </div>
                        
                    </>)}
                    
                </div>



            </div>
        </div>

    )
}

export default PaymentAndBilling
