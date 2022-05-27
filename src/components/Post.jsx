import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './css/post.css'
import News from '../assets/images/WebResource.jpg'
import News1 from '../assets/images/osetyaz-300x169.jpg'

function Post(props) {

  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const api = await fetch(props.url);
    const data = await api.json();
    setPost(data.results);
    console.log(data)
  };


  return (
    <div className='posts'>
      {post.map((recipe) => {
        return(
          <div className='post' key={recipe.id} to="/">
            <h2 className='post__title'>{recipe.title}</h2>
            <small>{recipe.category}</small>
            <small>{recipe.date}</small>
            <img src={recipe.img} alt="{recipe.title}" className="img-fluid post__img" />
            <p className='post__news' dangerouslySetInnerHTML={{__html: recipe.content.substring(0, recipe.content.substring(0, 210).lastIndexOf(' ')) + ' ...'}}></p>
          </div>
        );
      })}
    </div>

  )
}
export default Post;
