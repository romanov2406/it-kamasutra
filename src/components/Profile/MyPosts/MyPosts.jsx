import React, { Component } from 'react'
import Post from './Posts/Post';
import './MyPosts.css'






const MyPosts = (props) => {

let postElement = props.posts.map(elem => <Post like={elem.likesCount} message={elem.message}/> )

let newPostElem = React.createRef();
function addPost(){
  let text = newPostElem.current.value;
  props.addPost(text);
}
 let onPostChange = () => {

 }
    return (
      <div>
        <h3>My Posts</h3>
        <div>
          <textarea ref={newPostElem} onChange={onPostChange}  value={props.newPostText}/>
        </div>
        <button className="addPost" onClick={addPost}>Add post</button>
        <div>
        {postElement}
        </div>
      </div >
    )
  
}


export default MyPosts