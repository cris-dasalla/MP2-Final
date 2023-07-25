import React from 'react'
import './Listing.css'

import img from '../../../media/image-for-dashboard.png'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'

const Listing = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>Articles</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img} alt="Image Name" />
          <h3>Lorem, ipsum.</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img} alt="Image Name" />
          <h3>Lorem, ipsum.</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon"/>
          <img src={img} alt="Image Name" />
          <h3>Lorem, ipsum.</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img} alt="Image Name" />
          <h3>Lorem, ipsum.</h3>
        </div>
      </div>

      <div className="sellers flex">

        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Advisers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className="icon"/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                Lorem, ipsum dolor. <br />
                <small>
                  Lorem. <span className='date'>7 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Advisers</h3>
            <button className='btn flex'>
              See All <BsArrowRightShort className="icon"/>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
              <img src={img} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                Lorem, ipsum dolor. <br />
                <small>
                  Lorem. <span className='date'>7 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Listing