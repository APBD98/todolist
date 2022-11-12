import React from 'react'
import ActivityForm from '../../component/activityForm/ActivityForm'
import Header from '../../component/header/Header'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Header/>
        <ActivityForm/>
    </div>
  )
}

export default Dashboard