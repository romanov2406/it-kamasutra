import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
// import Profile from './components/Profile/Profile';
import { Component } from 'react';
import Dialogs from './components/Dialogs/Dialogs';
import './components/Profile/Profile.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content content">
      {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
