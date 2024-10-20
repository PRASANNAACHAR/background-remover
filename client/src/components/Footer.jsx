import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center cursor-pointer justify-between gap-4 px-4 lg:px-44 py-3'>
        <Link to='/'><img  width={150} src={assets.logo} alt="" /></Link>
        <p className='flex-1 boprder-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>All right reserved. | Copyright @bg removal</p>
        <div className='flex gap-1 '>
            <img width={40} src={assets.facebook_icon} alt="" />
            <img width={40} src={assets.twitter_icon} alt="" />
            <img width={40} src={assets.google_plus_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer