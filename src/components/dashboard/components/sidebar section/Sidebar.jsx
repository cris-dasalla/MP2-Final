import React from 'react'
import './Sidebar.css'

import img from '../../media/image-for-dashboard.png'

// Imported Icons
import {MdDashboard} from 'react-icons/md'
import {FaWallet} from 'react-icons/fa'
import {MdOutlineExplore} from 'react-icons/md'
import {BiSolidDoughnutChart} from 'react-icons/bi'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'
import {BiSolidInbox} from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

        <div className="logoDiv flex">
            <img src={img} alt="Image Name" />
            <h2>Sidebar</h2>
        </div>

        <div className="menuDiv">
            <h3 className="divTitle">
                MENU
            </h3>
            <ul className="menuLists grid">
                
                <li className="listItem">
                    <a href="#" className='menuLink'>
                        <BiSolidInbox className="icon"/>
                        <span className="smallText">
                            Inbox
                        </span>
                    </a>
                </li>
                
                <li className="listItem">
                    <a href="#" className='menuLink'>
                        <MdDashboard className="icon"/>
                        <span className="smallText">
                            Dashboard
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink'>
                        <FaWallet className="icon"/>
                        <span className="smallText">
                            Expenses
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink'>
                        <BsCreditCard2Front className="icon"/>
                        <span className="smallText">
                            Bills
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink'>
                        <MdOutlineExplore className="icon"/>
                        <span className="smallText">
                            Vendors
                        </span>
                    </a>
                </li>

                <li className="listItem">
                    <a href="#" className='menuLink'>
                        <BiSolidDoughnutChart className="icon"/>
                        <span className="smallText">
                            Analytics
                        </span>
                    </a>
                </li>
            </ul>
        </div>

        <div className="sideBarCard">
            <BsQuestionCircle className='icon'/>
            <div className="cardContent">
                <div className="circle"></div>

                <h3>Help Center</h3>
                <p>Contact us if you have inquiries or questions.</p>
                <button className='btn'>Go to help center</button>
            </div>
        </div>

    </div>
  )
}

export default Sidebar