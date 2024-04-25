import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { IAccount } from '@/types/IAccount';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<IAccount[]>([])
  type LoginParams = {
    username:string,
    password: string
  }
  const handleButtonClick = (endpoint: string) => {
    const newUrl = `/${endpoint}`;

    navigate(newUrl);
  };

  const loginUser = async (username:LoginParams, password:LoginParams) => {
    try {
      const response = await fetch('https://api-test.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      localStorage.setItem('userData', JSON.stringify(data));
      
      return data; 
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch('http://localhost/api/accounts.php');
        if (!response.ok) {
          throw new Error('Failed to fetch accounts');
        }
        const data = await response.json();
        setAccounts(data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, []);



  const openChat = () => {
    
    navigate('/userchat')
  }
  return (

    <aside className="flex border border-r-1" >
      <div className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-white-900 dark:border-gray-700">
        <a href="">
          <i className="fa-brands fa-react text-2xl text-emerald-500"></i>
        </a>

        <a onClick={() => handleButtonClick('home')} href="" className="focus:bg-emerald-600 focus:text-white text-emerald-500 p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </a>

        <a onClick={() => handleButtonClick('create-post')} href="" className="focus:bg-emerald-600 focus:text-white text-emerald-500 p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <i className="fa-solid fa-plus"></i>
        </a>


        <a onClick={() => handleButtonClick('notifications')} href="" className="p-1.5 focus:bg-emerald-600 focus:text-white text-emerald-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <i className="fa-regular fa-image"></i>
        </a>

        <a onClick={() => handleButtonClick('chats')} href="" className="focus:bg-emerald-600 focus:text-white text-emerald-500 p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <i className="fa-regular fa-comments"></i>
        </a>

        <a onClick={() => handleButtonClick('settings')} href="" className="p-1.5 focus:bg-emerald-600 focus:text-white text-emerald-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </a>

        <a onClick={() => {handleButtonClick('login')}}  href="#" className="focus:bg-emerald-600 focus:text-white text-emerald-500 p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-white-800 hover:bg-white-100">
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </a>

      </div>
      <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-60 dark:bg-white-900 dark:border-gray-700">
        <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">Accounts</h2>
        <div className="ml-5  h-1 w-16 bg-emerald-500 rounded"></div>
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
