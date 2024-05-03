import React from 'react'
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <div className='text-white flex flex-wrap justify-center items-center m-2 p-2'>
      <WorkCard live="" img="https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png" github="https://github.com/Dattatretya/netflix-gpt-2" name="Netflix GPT"/>
      <WorkCard live="" img="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=400x300&vertical=center" name="Food Ordering App" github=""/>
      <WorkCard live="https://tictactoe-dattatreya.netlify.app/" img="https://static-00.iconduck.com/assets.00/tic-tac-toe-icon-512x512-evpdbsvf.png" name="Tic Tac Toe"/>
      <WorkCard live="https://weatherapp-dattatreya.netlify.app/" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyw3ZyD5FktfuYtkbw1zWT12Zs5xolOlJyukF1xOxgQ&s" name="Weather App"/>
      <WorkCard live="" img="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg" name="Youtube Clone (ongoing)"/>
    </div>
  )
}

export default Work