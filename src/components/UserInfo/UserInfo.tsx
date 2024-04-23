import React from 'react';
import Socials from '../Socials/Socials';

const userData = {
  name: 'John Doe',
  email: 'john@example.com',
  avatarUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
};

const UserInfo: React.FC = () => {
  return (
    <aside className="border flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-white-900 dark:border-gray-700">
      <a href="" className="mx-auto">
        <i className="fa-brands fa-react text-2xl text-orange-500"></i>
      </a>

      <div className="flex flex-col items-center mt-6 -mx-2">
        <img className="object-cover w-24 h-24 mx-2 rounded-full" src={userData.avatarUrl} alt="avatar" />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{userData.name}</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{userData.email}</p>
        <div className='flex justify-between w-full mt-10'>
        <Socials></Socials>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
      </div>
    </aside>
  );
};

export default UserInfo;
