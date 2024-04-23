import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import UserInfo from './components/UserInfo/UserInfo';
import ChatWindow from './components/ChatWindow/ChatWindow';
import UserScreen from './components/UserScreen/UserScreen';
import UserPost from './components/UserPost/UserPost';
import Settings from './components/Settings/Settings';
import Authorize from './components/Authorize/Authorize';
import StateProvider from './stateContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <ChatWindow />
        <UserInfo />
        {/* <UserScreen></UserScreen>
        <UserPost></UserPost>
        <Settings></Settings>
      <Authorize></Authorize> */}
      </div>
    </Router>
  );
};


export default App;
