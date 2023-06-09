import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/header.module.css'

function Header() {
  return (
    <div className={style.Header}>
        <Link exact to='/explore'>
            <img src='/images/search.png' />
        </Link>
        <div className={style.nav_items}>
            <Link exact to='/friends_invite'>
                <img src='/images/message.png' />
            </Link>
            <Link exact to='/upcoming'>
                <img src='/images/calander.png' />
            </Link>
            <Link exact to='/activity'>
                <img src='/images/notification.png' />
            </Link>
            <Link exact to='/profile'>
                <img src='/images/user.png' />
            </Link>
        </div>
    </div>
  )
}

export default Header