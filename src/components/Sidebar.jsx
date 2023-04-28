import React from 'react';
import { FaFire } from '@react-icons/all-files/fa/FaFire'
import { FaPoo } from '@react-icons/all-files/fa/FaPoo'
import { BsFillLightningFill } from '@react-icons/all-files/bs/BsFillLightningFill'
import { BsPlus } from '@react-icons/all-files/bs/BsPlus'
import { RiSettings3Fill } from '@react-icons/all-files/ri/RiSettings3Fill'

const SidebarIcon = ({icon, text = 'tooltip'}) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

const SidebarLine = () => (
    <div className='h-0.5 w-12 bg-gray-800 mx-auto rounded-full'></div>
);

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
        
        <SidebarIcon icon={<FaFire size="28" />} text='Fireship' />
        <SidebarLine />
        <SidebarIcon icon={<BsPlus size="28" />} text='Add a new Server' />
        <SidebarIcon icon={<BsFillLightningFill size="28" />} text='Upgrade to Pro' />
        <SidebarIcon icon={<FaPoo size="28" />} text='Poop Time ?' />
        <SidebarLine />
        <SidebarIcon icon={<RiSettings3Fill size="28" />} text='Settings' />

    </div>
  );
}

export default Sidebar;
