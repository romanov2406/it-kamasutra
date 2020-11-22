import React, { Component } from 'react'
import Post from './Posts/Post';





class MyPosts extends Component {
  render() {
    return (
      <div>
        <textarea ></textarea>
        <button>Add post</button>
        <Post like="15" message="Hi i am your Best friend"/>
        <Post like="25" message="hi there"/>
      </div >
    )
  }
}


export default MyPosts