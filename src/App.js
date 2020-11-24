import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import { Component } from 'react';
import Dialogs from './components/Dialogs/Dialogs';
import './components/Profile/Profile.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content content">
            <Route exact path="/dialog" render={() => <Dialogs state={props.state.messagesPage} state={props.state.messagesPage}/>} />
            <Route exact path="/profile" render={() => <Profile  profilePage={props.state.profilePage} addPost={props.addPost}/>} />
        </div>      
      </div>
  );
}

export default App;
