import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';



function Header() {
    const [inputSearch, setInputSearch] = useState("");
  return (
    <div className='header'>
       <div className='header__left'>
        <MenuIcon />
        <Link to="/">
        <img 
        className='header__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"alt=""/>
       
        
        </Link>
        </div>
        
        
      
       <div className='header__input'>
       <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type='text'/>
       <Link to={`/search/${inputSearch}`}>
       <SearchIcon className='header_input_button'/>
       </Link>
       

       </div>
        <div className="header__icons">
        <VideoCallIcon className='header_icon' />
        <AppsIcon className='header_icon' />
        <NotificationsIcon className='header_icon'/>
        <Avatar />


        </div>


      
    </div>
  )
}

export default Header
