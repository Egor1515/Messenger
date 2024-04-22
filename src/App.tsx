import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import UserInfo from './components/UserInfo/UserInfo';
import ChatWindow from './components/ChatWindow/ChatWindow';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <ChatWindow/>
      <UserInfo />
    </div>
  );
};


export default App;
