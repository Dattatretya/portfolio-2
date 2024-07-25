import React from 'react'
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <div className='text-white flex flex-wrap justify-center items-center m-2 p-2'>
      <WorkCard live="" img="https://4.imimg.com/data4/DB/QV/MY-29214035/library-management-system.jpg" name="Notes Management System(MERN)" github="https://github.com/Dattatretya?tab=repositories&q=book+store&type=&language=&sort="/>
      <WorkCard live="" img="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=400x300&vertical=center" name="Food Ordering App" github="https://github.com/Dattatretya/Namaste-React"/>
      <WorkCard live="https://tictactoe-dattatreya.netlify.app/" img="https://static-00.iconduck.com/assets.00/tic-tac-toe-icon-512x512-evpdbsvf.png" name="Tic Tac Toe" github="https://github.com/Dattatretya/Intern-Kaksha-TicTacToe"/>
      <WorkCard live="https://dattatreya-weather.netlify.app/" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyw3ZyD5FktfuYtkbw1zWT12Zs5xolOlJyukF1xOxgQ&s" name="Weather App" github="https://github.com/Dattatretya/Intern-Kaksha-Weatherapp"/>
      <WorkCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNYB79Aqp-PH-W7iv6EPUoikD9dw1WNpv1BFIHLZU-9w&s" name="This Portfolio" github="https://github.com/Dattatretya/namaste-youtube"/>
      <WorkCard live="" img="https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png" github="https://github.com/Dattatretya/netflix-gpt-2" name="Netflix Frontend Clone"/>

    </div>
  )
}

export default Work