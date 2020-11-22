import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
// import Profile from './components/Profile/Profile';
import { Component } from 'react';
import Dialogs from './components/Dialogs/Dialogs';
import './components/Profile/Profile.css'


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      {/* <Profile /> */}
      <div className="content">
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
