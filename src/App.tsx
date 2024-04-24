import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import UserInfo from './components/UserInfo/UserInfo';
import ChatWindow from './components/ChatWindow/ChatWindow';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <ChatWindow />
        <UserInfo />
      </div>
    </Router>
  );
};


export default App;
