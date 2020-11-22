import React, { Component } from 'react'
import Post from './Posts/Post';
import './MyPosts.css'






class MyPosts extends Component {
  PostData = [
    {
        id: 1,
        message: 'Hello how are you',
        likesCount: 12
    },
    {
        id: 2,
        message: 'Hello whot uoy are doing',
        likesCount: 515
    },
    {
        id: 3,
        message: 'Fuck you',
        likesCount: 10
    },
    {
        id: 4,
        message: 'Nice to meet you',
        likesCount: 5
    },
  
  ];


posts = this.PostData.map(elem => <Post like={elem.likesCount} message={elem.message}/> )

  render() {
    return (
      <div>
        <h3>My Posts</h3>
        <div>
          <textarea ></textarea>
        </div>
        <button className="addPost">Add post</button>
        {/* <Post like={this.PostData[0].likesCount} message={this.PostData[0].message} />
        <Post like={this.PostData[1].likesCount} message={this.PostData[1].message} /> */}
        {this.posts}
      </div >
    )
  }
}


export default MyPosts