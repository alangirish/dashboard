import React from 'react'

function SidebarItem({icon, color, text, onClick}) {
  return (
    <div className='flex flex-row pt-4 pb-4 pl-8 space-x-5 opacity-85' onClick={onClick}>
      <div className={color}>{icon}</div>
      <h2 className={`font-poppins font-base ${color} pt-1 opacity-85`}>{text}</h2>
    </div>
  )
}

export default SidebarItem
