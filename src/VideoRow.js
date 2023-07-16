import React from 'react'
import './Videorow.css'

function VideoRow({views,subs,descrip, timestamp,title,channel,image}) {
  return (
    <div className='videorow'>
        <img  src = {image} alt=""/>
        <div className='videorow_Text'>
            <h3>{title}</h3>
            <p className='videorow_headline'>
                {channel} .  <span className='videorow_sub'>
                <span className='videorow_subsno'>{subs}</span> Subsribers
                    </span> {views} views . {timestamp}
            </p>
            <p className='videorow_des'>
                {descrip}
            </p>
        </div>
      
    </div>
  )
}

export default VideoRow
