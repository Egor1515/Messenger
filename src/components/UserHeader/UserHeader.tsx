import React, { useEffect, useState } from "react";
import { IUserData } from "@/types/IUserData";

const UserHeader: React.FC = () => {
    const [userData, setUserData] = useState<IUserData | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('https://api.example.com/user');
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
        <div className="w-full h-full flex flex-col justify-between mb-10 mt-5">
            <header className="border-0 border-b-2 h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-white-800 text-black">
                {userData && (
                    <div className="mb-5 flex flex-shrink-0 items-center space-x-4 text-white">
                        <div className="flex flex-col items-end">
                            <div className="text-md text-black font-medium">{userData.name}</div>
                            <div className="text-sm text-black font-regular">{userData.role}</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="object-cover w-12 h-12 mx-2 rounded-full" src={userData.avatarUrl} alt="avatar" />
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default UserHeader;
