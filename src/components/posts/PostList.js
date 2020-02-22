import React from 'react';
import Post from './Post';

const PostList = (props) =>{

  if (props.posts.length === 0){
	  return (<p>Loading...</p>)
	}

  const posts = props.posts.map((post, index) => {
    return (
      <li key={index} className="component-item">
        <div  className="component">
          <Post post={post}/>
        </div>
      </li>
    )
  })

  return(
    <ul className="component-list">
	    {posts}
	  </ul>
  )
}
export default PostList;
