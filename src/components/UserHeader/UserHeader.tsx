import React from "react";

const UserHeader: React.FC = () => {
    const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        avatarUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    }
    return (
        <div className="w-full h-full flex flex-col justify-between mb-10 mt-5 ">
            <header className="border-0 border-b-2 h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-white-800 text-black">
                <div className="mb-5 flex flex-shrink-0 items-center space-x-4 text-white">
                    <div className="flex flex-col items-end ">
                        <div className="text-md text-black font-medium ">John Doe</div>
                        <div className="text-sm text-black font-regular">Student</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="object-cover w-12 h-12 mx-2 rounded-full" src={userData.avatarUrl} alt="avatar" />
                    </div>
                </div>
            </header>
        </div>
    )
}
export default UserHeader