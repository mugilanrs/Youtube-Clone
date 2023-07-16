import React from 'react'

import './SidebarRow.css'

function SidebarRow({ selected ,Icon,title}) {
  return (
    <div className={`sidebarow ${selected && "selected"}`}>
        <Icon  className="sidebarrow_icon "/>
      <h2 className='sidebarrow_title'>{title}</h2>
    </div>
  )
}

export default SidebarRow
