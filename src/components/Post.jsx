import React from 'react'
import './css/post.css'
import News from '../assets/images/WebResource.jpg'
import News1 from '../assets/images/osetyaz-300x169.jpg'

function Post() {
  return (
    <div className='posts'>
      <div className='post'>
        <h2 className='post__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit adipisicing elit adipisicing elit.</h2>
        <small>новости</small>
        <small>16.05.2022</small>
        <img src={News} alt="" className="img-fluid post__img" />
        <p className='post__news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente molestiae numquam excepturi quibusdam culpa dolores explicabo minus. Similique officia dolorem maiores optio explicabo nesciunt dolore architecto rerum tempore beatae.</p>
      </div>
      <div className='post'>
        <h2 className='post__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <small>новости</small>
        <small>16.05.2022</small>
        <img src={News1} alt="" className="img-fluid post__img" />
        <p className='post__news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente molestiae numquam excepturi quibusdam culpa dolores explicabo minus. Similique officia dolorem maiores optio explicabo nesciunt dolore architecto rerum tempore beatae.</p>
      </div>
      <div className='post'>
        <h2 className='post__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <small>новости</small>
        <small>16.05.2022</small>
        <img src={News} alt="" className="img-fluid post__img" />
        <p className='post__news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sapiente molestiae numquam excepturi quibusdam culpa dolores explicabo minus. Similique officia dolorem maiores optio explicabo nesciunt dolore architecto rerum tempore beatae.</p>
      </div>
    </div>

  )
}
export default Post;
