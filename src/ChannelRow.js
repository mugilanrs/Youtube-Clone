import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ChannelRow({image,channel,subs,noOfvideos,descrip,verified}) {
  return (
    <div className='channelrow'>
        <Avatar className='channelrow_logo' alt={channel} src={image} />
        <div className='channelrow_text'>
        
            <h4>{channel} {verified && <CheckCircleIcon className='tick'/>}</h4>
           
            <p> {subs}subsribers . {noOfvideos} videos </p>
            <p className='desp'>{descrip}</p>
        </div>
      
    </div>
  )
}

export default ChannelRow
