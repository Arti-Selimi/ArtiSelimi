import React from 'react'
import MobileAbout from '../about/MobileAbout'
import CardLayout from '../slides/layout'

export default function MobileMain() {
  return (
    <div className='flex flex-col py-20 px-10 gap-10'>
        <div>
          <MobileAbout />
        </div>
        <div>
          <CardLayout />
        </div>
        <div></div>
    </div>
  )
}