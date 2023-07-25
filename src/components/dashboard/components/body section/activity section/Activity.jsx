import React from 'react'
import './Activity.css'

import img from '../../../media/image-for-dashboard.png'
import {BsArrowRightShort} from 'react-icons/bs'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer grid">

        <div className="singleCustomer flex">
          <img src={img} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Lorem, ipsum.</span>
            <small>Lorem ipsum dolor sit.</small>
          </div>

          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Lorem, ipsum.</span>
            <small>Lorem ipsum dolor sit.</small>
          </div>

          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Lorem, ipsum.</span>
            <small>Lorem ipsum dolor sit.</small>
          </div>

          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Lorem, ipsum.</span>
            <small>Lorem ipsum dolor sit.</small>
          </div>

          <div className="duration">
            2 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Lorem, ipsum.</span>
            <small>Lorem ipsum dolor sit.</small>
          </div>

          <div className="duration">
            2 min ago
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Activity