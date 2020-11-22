import React, { Component } from 'react'
import './Post.css'

const Post = (props) => {
  console.log(props.message);
  return (
    <div>
      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="postImg" alt="" />
      <div className="profile-link">
        <div>{props.message}</div>
        <br />
        <span>Likes {props.like}</span>
      </div>
    </div>
  );
}
export default Post