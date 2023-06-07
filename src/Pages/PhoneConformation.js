import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import style from '../style/phoneConfirm.module.css'
import PhoneInput from 'react-phone-number-input'

export default function PhoneConformation() {
    const [value, setValue] = useState();

  return (
    <div className={style.PhoneConfirmContainer}>
        <Link exact to='/' className={style.BackBtn}>
            <img src='/images/back.png' />
        </Link>
        <h1>Enter your phone</h1>
        <PhoneInput international defaultCountry='PK' value={value} onChange={setValue} />
        <p>By entering your number, you're agreing to our{' '} 
            <span>Terms of Service and Privacy Policy. </span>
            Thanks!
        </p>
        <Link to='/code_confirm' className='primaryBtn d-flex align-items-center'>
            Next
        </Link>
    </div>
  )
}
