import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchpage'>
        <div className='searchpage_filter'>
            <TuneIcon />
            <h2>FILTER</h2>
        </div>
        <hr/>
        <ChannelRow
        image="https://img.uhdpaper.com/image-4/a/thumbnail/anime-boy-alone-night-scenery-4k--81.4_a.jpg"
        channel=" MUGI ANIME WORLD "
        verified
        subs="19M"
        noOfvideos={900}
        descrip="This is my ANIME WORLD 🔥🚀🔥 where anyone can enjoy their time with all these videos made in a special way for your needs.Support MAX appreciate the Way you guys have shown me Your LOVE❤️"
        />
        <hr />
        <VideoRow
        image="https://i.ytimg.com/vi/R4WB0a5V4G4/maxresdefault.jpg"
        channel="MUGI ANIME WORLD"
        timestamp="5 days ago"
        title="MY TOP 20 ANIME RECOMMENDATIONS!!🚀🔥"
        views="21.2M"
        subs="9M"
        descrip="This video is about my top 10 personal anime recommendations . DONT MISS OUT ON THIS BANGER! every anime is personalized in every taste"
        />
         <VideoRow
        image="https://wallpaperaccess.com/full/6319353.jpg"
        channel="MUGI ANIME WORLD"
        timestamp="20 days ago"
        title="WHERE TO WATCH NOW? ANIME SERVERS DOWN?!!"
        views="100M"
        subs="9M"
        descrip="DONT WORRY GUYS WE GOT YOU anime is still alive and up running in these many other sites dont miss out!"
        />
         <VideoRow
        image="https://i.ytimg.com/vi/ne6Y8Q5H0RI/maxresdefault.jpg"
        channel="MUGI ANIME WORLD"
        timestamp="15 seconds ago"
        title="ANIME TUTORIAL FREE!!!"
        views="10M"
        subs="9M"
        descrip="This is a free tutorial video and you can get a free template with it online .PLEASE FOLLOW THE instructions line by line"
        />
         <VideoRow
        image="https://i.ytimg.com/vi/Zd6SBePUzZ4/maxresdefault.jpg"
        channel="YOUR ANIME"
        timestamp="2 days ago"
        title="HOW DID HE GET the Magic POWER"
        views="127K"
        subs="20K"
        descrip="HOW did he get the superpower in this episode.STAY TUNED!! to know more about this superpower"
        />
         <VideoRow
        image="https://i.ytimg.com/vi/Ykz3qRjHVz0/maxresdefault.jpg"
        channel="My master Anime"
        timestamp="5 hours Ago"
        title="TOP 25 ANime LoGo packs!!"
        views="1M"
        subs="278K"
        descrip="This video is the one stop where you get all the anime packs you ever wanted in YOUR LIFE!!"
        />
         <VideoRow
        image="https://i.ytimg.com/vi/49_2ONXnS4Q/maxresdefault.jpg"
        channel="MUGI ANIME WORLD"
        timestamp="5 months ago"
        title="ANIME for BEGINNERS || TOP 5 DONT MISS!1"
        views="100M"
        subs="9M"
        descrip="Starting anime just now dont worry here are My top 5 anime where you should start and where to watch all the guidelines here!!"
        />
        
      
    </div>
  )
}

export default SearchPage
