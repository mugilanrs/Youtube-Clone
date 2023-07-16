import { Avatar } from '@mui/material'
import React from 'react'
import "./VideoCard.css"
function VideoCard({image, title,channel, timestamp, views, channelImage}) {
  return (
    <div>
      <img  className='Thumbnail'src={image} alt=""/>
      <div className='video_info'>
        <Avatar className='video_avatar' alt={channel} src={channelImage}/>
        <div className='video_text'>
            <h4> {title} </h4>
            <p> {channel} </p>
            <p>
                {views} . {timestamp}


            </p>
        </div>
      </div>

    </div>
  )
}

export default VideoCard
