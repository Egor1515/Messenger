import React, { useEffect, useState } from 'react';
import Socials from '../Socials/Socials';
import { IUserData } from '@/types/IUserData';

const UserInfo: React.FC = () => {
    const [userData, setUserData] = useState<IUserData | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8888/api/user-screen.php');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <aside className="border flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-white-900 dark:border-gray-700">
            <a href="/" className="mx-auto">
                <i className="fa-brands fa-react text-2xl text-emerald-500"></i>
            </a>

            <div className="flex flex-col items-center mt-6 -mx-2">
                {userData && (
                    <>
                        <img className="object-cover w-24 h-24 mx-2 rounded-full" src={userData.avatarUrl} alt="avatar" />
                        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{userData.name}</h4>
                        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{userData.email}</p>
                    </>
                )}
                {!userData && (
                    <p className="text-gray-600 dark:text-gray-400">Loading user data...</p>
                )}
                <div className='flex justify-between w-full mt-10'>
                    <Socials />
                </div>
            </div>

            <div className="flex flex-col justify-between flex-1 mt-6">
            </div>
        </aside>
    );
};

export default UserInfo;
