import React from 'react'

import { MdKeyboardArrowRight } from '@react-icons/all-files/md/MdKeyboardArrowRight'
import { BsPlus } from '@react-icons/all-files/bs/BsPlus'

const NavbarListItem = ({ icon, text }) => (
  <div className='w-full flex justify-between items-center my-1 group'>
    <div className='flex justify-between items-center'>
      <div className='group-hover:rotate-90 transition-all duration-200 ease-in-out'>
        {icon}
      </div>

      <p className='font-medium text-gray-400'>{text}</p>
    </div>
    <BsPlus className='text-green-500 group-hover:rotate-90 transition-all duration-200 ease-in-out' size="20"/>
  </div>
);

const Navbar = () => {
  return (
    <div className='fixed w-36 top-0 left-16 px-3 py-3 h-screen flex flex-col bg-gray-700 items-start'>
      <h3 className='text-gray-200 font-semibold tracking-wider mb-2'>Channels</h3>

      <NavbarListItem icon={<MdKeyboardArrowRight size={20} className='text-green-500' />} text="Topics" />
      <NavbarListItem icon={<MdKeyboardArrowRight size={20} className='text-green-500' />} text="Questions" />
      <NavbarListItem icon={<MdKeyboardArrowRight size={20} className='text-green-500' />} text="Random" />

    </div>
  )
}

export default Navbar
