import React, { useState } from "react";
import ChatList from "../ChatList/Chatlist";

interface Chat {
    sender: string;
    timestamp: string;
    subject: string;
    message: string;
}


const AllChats: React.FC = () => {
    const [showChat, setShowChat] = useState(true);
   
    const handleChatClick = () => {
        setShowChat(prevState => !prevState);
    };
    const chatData = [

        {
            sender: 'William Smith',
            timestamp: '6 months ago',
            subject: 'Meeting Tomorrow',
            message: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to`,
        },
        {
            sender: 'William Smith',
            timestamp: '6 months ago',
            subject: 'Meeting Tomorrow',
            message: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to`,
        },
        {
            sender: 'William Smith',
            timestamp: '6 months ago',
            subject: 'Meeting Tomorrow',
            message: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to`,
        },
        {
            sender: 'William Smith',
            timestamp: '6 months ago',
            subject: 'Meeting Tomorrow',
            message: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to`,
        },
        {
            sender: 'William Smith',
            timestamp: '6 months ago',
            subject: 'Meeting Tomorrow',
            message: `Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to`,
        },
    ]

    return (
        <div className=' h-[1px] w-full '>
            {showChat ? (
                <>
                    <div className='bg-white p-4 backdrop-blur supports-[backdrop-filter]:bg-white'>
                        <form>
                            <div className='relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                <input
                                    className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8'
                                    placeholder='Search'
                                />
                            </div>
                        </form>
                    </div>
                    <div className='h-full w-full rounded-[inherit]'>
                        <div className='flex flex-col gap-2 p-4 pt-0'>
                            {chatData.map((chat, index) => (
                                <button
                                    key={index}
                                    className=" border hover:border-l-orange-500 hover:border-l-8 transition:translate-x-0 hover:translate-x-4 flex flex-col items-start gap-2 rounded-lg p-3 text-left text-sm transition-all bg-orange-200"
                                    onClick={() => handleChatClick()}
                                >
                                    <div className="flex w-full flex-col gap-1 bg-orangy-200">
                                        <div className="flex items-center">
                                            <div className="flex items-center gap-2 font-semibold">{chat.sender}</div>
                                            <div className="ml-auto text-xs text-foreground">{chat.timestamp}</div>
                                        </div>
                                        <div className="text-xs font-medium">{chat.subject}</div>
                                    </div>
                                    <div className="line-clamp-2 text-xs text-muted-foreground">{chat.message}</div>
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <ChatList />
            )}
        </div>
    );
};

export default AllChats;



