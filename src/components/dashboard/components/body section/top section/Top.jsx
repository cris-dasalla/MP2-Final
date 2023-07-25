import React from 'react'
import './Top.css'

// Imported Icons
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'

// Imported media
import img from '../../../media/image-for-dashboard.png'
import video from '../../../media/video.mp4'

const Top = () => {
  return (
    <div className='topSection'>
        <div className="headerSection flex">
            <div className="title">
                <h1>Accounting Website</h1>
                <p>Welcome Back Admin!</p>
            </div>

            <div className="searchBar flex">
                <input type="text" placeholder='Search'/>
                <BiSearchAlt className='icon'/>
            </div>

            <div className="adminDiv flex">
                <TbMessageCircle className='icon'/>
                <IoIosNotificationsOutline className='icon'/>
                <div className="adminImage">
                    <img src={img} alt="Admin Image" />
                </div>
            </div>

        </div>

        <div className="cardSection flex">
            <div className="rightCard flex">
                <h1>Advise and create financial solutions.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                <div className="buttons flex">
                    <button className='btn'>Explore More</button>
                    <button className='btn transparent'>Top News</button>
                </div>

                <div className="videoDiv">
                    <video src={video} autoPlay loop muted></video>
                </div>
            </div>

            <div className="leftCard flex">
                <div className="main flex">

                    <div className="textDiv">
                        <h1>Bank Accounts</h1>

                        <div className="flex">
                            <span>
                                Today <br /> <small>4 Accounts Secured</small>
                            </span>
                            <span>
                                This Month <br /> <small>27 Accounts Secured</small>
                            </span>
                        </div>

                        <span className='flex link'>
                            See More <BsArrowRightShort className='icon'/>
                        </span>

                    </div>

                    <div className="imgDiv">
                        <img src={img} alt="Image Name" />
                    </div>
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
        </div>
    </div>
  )
}

export default Top