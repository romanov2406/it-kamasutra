import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css'
import Profileinfo from './Profileinfo/Profileinfo';
import state from './../../redux/state';

const Profile = (props) => {
 

  return (
    <div className="content">
      <Profileinfo />
      <MyPosts posts={props.profilePage.posts} addPost={props.addPost} post={props.profilePage.newPostText} newPostText={props.profilePage.newPostText}/>
    </div>
  );
}
export default Profile