
import Post from '../components/Post';

import './css/home.css';

function Home() {
  return (
    <div className='line'>
      <div className='main-title sticky-top'>
        <div>
          <h1>Главная</h1> 
        </div>
        <div className='soc'>
          <i className='bx bxl-telegram'></i>
          <i className='bx bxl-vk'></i>
        </div>
      </div>
      <Post url="https://api.ossetia.life/api/v1/all"/>
    </div>
  )
}

export default Home;
