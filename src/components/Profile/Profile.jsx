import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css'

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img className="imgMain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQlWGM3D23JPQc53SF48t-jkP1uCKjXDzwA&usqp=CAU" />
      </div>
      <div className="profile-user-img">
        <img className="header-avatar" src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&rect=29%2C202%2C4955%2C2477&q=45&auto=format&w=1356&h=668&fit=crop" />
      </div>

      <div className="itemProfile">
        <div className="profile-link">
          ava Descriptions
           </div>
        <MyPosts />
      </div>
    </div>
  );
}
export default Profile