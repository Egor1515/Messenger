import React from 'react';
import UserScreen from '../UserScreen/UserScreen';
import UserPost from '../UserPost/UserPost';
import { Route, Routes } from 'react-router';
import AllChats from '../AllChats/AllChats';
import Settings from '../Settings/Settings';
import Authorize from '../Authorize/Authorize';
import PostSkeleton from '../PostSkeleton/PostSkeleton';
import ChatList from '../ChatList/Chatlist';

const ChatWindow: React.FC = () => {


  return (
    <div className="chat-window overflow-y-auto w-full h-screen">
      <div className='bg-border h-[1px] w-full'></div>
      <Routes>
        <Route path="/home" element={<UserScreen />} />
        <Route path="/notifications" element={<UserPost />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chats" element={<AllChats />} />
        <Route path="" element={<AllChats />} />
        <Route path="/login" element={<Authorize />} />
        <Route path="/userchat" element={<ChatList />} />
        <Route path="/create-post" element={<PostSkeleton onPost={() => {}}/>} />
      </Routes>
    </div>
  );
};

export default ChatWindow;
