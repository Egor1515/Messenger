import React, { useEffect, useState } from 'react';
import ChatInput from '../ChatInput/ChatInput';
import UserHeader from '../UserHeader/UserHeader';

import { IChatListInterface } from '@/types/IChatListInterface';

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<IChatListInterface[]>([])

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const response = await fetch('http://localhost:8888/api/chat-data.php');
        if (!response.ok) {
          throw new Error('Failed to fetch chat data');
        }
        const data = await response.json();
        setChats(data);
      } catch (error) {
        console.error('Error fetching chat data:', error);
      }
    };

    fetchChatData();
  }, []);

  return (
    <div className='flex flex-col gap-5 h-full justify-between relative'>
      <UserHeader></UserHeader>
      {chats.map((chat, index) => (
        <div
          key={chat.id}
          className={`flex justify-${index % 2 === 0 ? 'end' : 'start'} mt-5 ml-5 gap-2.5`}
        >
          <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 ${index % 2 === 0 ? 'bg-orange-200' : 'bg-gray-200'} rounded-e-xl rounded-es-xl `}>
            <div className='flex items-center space-x-2 rtl:space-x-reverse'>
              <span className='text-sm font-semibold text-gray-900 dark:text-white'>{chat.name}</span>
              <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>{chat.time}</span>
            </div>
            <p className='text-sm font-normal py-2.5 text-gray-900 dark:text-white'>{chat.message}</p>
            <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
              {chat.delivered ? 'Delivered' : 'Sending...'}
            </span>
          </div>
          <button
            id={`dropdownMenuIconButton-${chat.id}`}
            data-dropdown-toggle={`dropdownDots-${chat.id}`}
            data-dropdown-placement='bottom-start'
            className='inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-white-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-white-900 dark:hover:bg-white-800 dark:focus:ring-gray-600'
            type='button'
          >
          </button>
          <div>
          </div>
        </div>
      ))
      }
      <div className='sticky bottom-0 w-full bg-white'>
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatList;
