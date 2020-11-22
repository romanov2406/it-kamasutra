import React, { Component } from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css'
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = () => {
  return (
    <div className="content">
      <Profileinfo />
      <MyPosts />
    </div>
  );
}
export default Profile