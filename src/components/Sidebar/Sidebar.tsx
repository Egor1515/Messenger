import React from 'react';
import AuthService  from '../Authorize/AuthService';
import { useNavigate } from 'react-router-dom'

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = (endpoint: string) => {
    const newUrl = `/${endpoint}`;

    navigate(newUrl);
  };

  const accounts = [
    {
      id: 1,
      name: 'Mia John',
      followers: '11.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100'
    },
    {
      id: 2,
      name: 'Arthur Melo',
      followers: '1.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80'
    }, {
      id: 2,
      name: 'Arthur Melo',
      followers: '1.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80'
    }, {
      id: 2,
      name: 'Arthur Melo',
      followers: '1.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80'
    }, {
      id: 2,
      name: 'Arthur Melo',
      followers: '1.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80'
    }, {
      id: 2,
      name: 'Arthur Melo',
      followers: '1.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80'
    }, {
      id: 2,
      name: 'Arthur Melo',
      followers: '1.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80'
    }, {
      id: 2,
      name: 'Arthur Melo',
      followers: '1.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80'
    }, {
      id: 2,
      name: 'Arthur Melo',
      followers: '1.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80'
    }, {
      id: 2,
      name: 'Arthur Melo',
      followers: '1.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80'
    }, {
      id: 2,
      name: 'Arthur Melo',
      followers: '1.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80'
    }, {
      id: 2,
      name: 'Arthur Melo',
      followers: '1.2 Followers',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80'
    },
  ]
  const openChat = () => {
    navigate('/userchat')
  }
  return (

    <aside className="flex border border-r-1" >
      <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-white-900 dark:border-gray-700">
        <a href="">
          <i className="fa-brands fa-react text-2xl text-orange-500"></i>
        </a>

        <a onClick={() => handleButtonClick('home')} href="" className="focus:bg-teal-600 focus:text-white text-orange-500 p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </a>

        <a onClick={() => handleButtonClick('create-post')} href="" className="focus:bg-teal-600 focus:text-white text-orange-500 p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <i className="fa-solid fa-plus"></i>
        </a>


        <a onClick={() => handleButtonClick('notifications')} href="" className="p-1.5 focus:bg-teal-600 focus:text-white text-orange-500 p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <i className="fa-regular fa-image"></i>
        </a>

        <a onClick={() => handleButtonClick('chats')} href="" className="focus:bg-teal-600 focus:text-white text-orange-500 p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <i className="fa-regular fa-comments"></i>
        </a>

        <a onClick={() => handleButtonClick('settings')} href="" className="p-1.5 focus:bg-teal-600 focus:text-white text-orange-500 p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path stroke-linecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>

        <a onClick={() => {AuthService.isAuthorized()? handleButtonClick('home'):handleButtonClick('login')}} href="" className="focus:bg-teal-600 focus:text-white text-orange-500 p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </a>

      </div>
      <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-white-900 dark:border-gray-700">
        <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">Accounts</h2>

        <div className="mt-8 space-y-4">
          {accounts.map((account) => (
            <button onClick={() => openChat()} key={account.id} className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-white-800 gap-x-2 hover:bg-white-100 focus:outline-none">
              <img className="object-cover w-8 h-8 rounded-full" src={account.imageUrl} alt="" />

              <div className="text-left rtl:text-right">
                <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">{account.name}</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">{account.followers}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
