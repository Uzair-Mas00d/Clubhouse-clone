import React from 'react'
import style from '../style/phoneConfirm.module.css'
import { Link } from 'react-router-dom'

function AllowNotification() {
  return (
    <div className={style.PhoneConfirmContainer}>
        <div className='text-center'>
            <h1 className='mb-4'>Last, important  step!</h1>
            <h1 className='mb-3'>Enable notification to when people are talking</h1>
        </div>
        <div className={style.notificationContainer}>
            <div className='p-3'>
                <h3>Clubhouse Would Like to Send You Notifications</h3>
                <p>Notification may includes alerts, sound and icon badges</p>
            </div>
            <div className={style.action_btn}>
                <Link exact to='/home'>
                    Don't Allow
                </Link>
                <Link exact to='/home'>
                    Allow
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AllowNotification