import React from 'react'
import Sidebar from '../dashboard/components/sidebar section/Sidebar'
import Body from '../dashboard/components/body section/Body'

const Dashboard = () => {
  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <Sidebar/>
        <Body/>
      </div>
    </div>
  )
}

export default Dashboard