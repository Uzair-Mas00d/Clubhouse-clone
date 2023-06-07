import React from 'react'
import style from '../style/explore.module.css'
import { Link } from 'react-router-dom'

function SubHeader(props) {
  return (
    <div className={style.head}>
        <Link exact to='/home'>
            <img src='/images/back.png' />
        </Link>
        <h3>{ props.pageTitle }</h3>
    </div>
  )
}

export default SubHeader