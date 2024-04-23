import React from 'react';
import ChatInput from '../ChatInput/ChatInput';
import UserHeader from '../UserHeader/UserHeader';
import './ChatList.css'
const ChatList:React.FC = () => {
  const chats = [
    {
      id: 1,
      name: 'Bonnie Green',
      time: '11:46',
      message: "That's awesome. I think our users will really appreciate the improvements.",
      delivered: true,
    },
    {
      id: 2,
      name: 'Alice White',
      time: '12:15',
      message: 'Sure, let me know if you need any help with that.',
      delivered: false,
    }, {
      id: 2,
      name: 'Alice White',
      time: '12:15',
      message: 'Sure, let me know if you need any help with that.',
      delivered: false,
    }, {
      id: 2,
      name: 'Alice White',
      time: '12:15',
      message: 'Sure, let me know if you need any help with that.',
      delivered: false,
    }, {
      id: 2,
      name: 'Alice White',
      time: '12:15',
      message: 'Sure, let me know if you need any help with that.',
      delivered: false,
    }, {
      id: 2,
      name: 'Alice White',
      time: '12:15',
      message: 'Sure, let me know if you need any help with that.',
      delivered: false,
    },
    {
      id: 3,
      name: 'Alice White',
      time: '12:15',
      message: 'Sure, let me know if you need any help with that.',
      delivered: false,
    },
  ];

  return (
    <div className='flex flex-col gap-5 h-full justify-between '>
      <UserHeader></UserHeader>
      {chats.map((chat, index) => (
        <div
          key={chat.id}
          className={`flex justify-${index % 2 === 0 ? 'end' : 'start'} mt-5 ml-5 gap-2.5`}
        >
          <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 ${index % 2 === 0 ? 'bg-orange-200':'bg-gray-200'} rounded-e-xl rounded-es-xl `}>
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
      <div className=' h-full w-full'>
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatList;
