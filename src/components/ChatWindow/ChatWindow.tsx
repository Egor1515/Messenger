import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group"
import ChatList from '../ChatList/Chatlist';

const ChatWindow: React.FC = () => {
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
  // const Hook = useHook()
  return (
    <div className="chat-window overflow-y-auto w-full">
      <div className="flex items-center px-4 py-2">
        <h1 className='text-xl text-secondary-foreground '>Message</h1>
        <div className='inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground ml-auto'>
          {/* <Hook/> */}
          <ToggleGroup type="single">
            {(!showChat && (
              <ToggleGroupItem onClick={() => { handleChatClick() }} className="focus:outline-none focus:ring focus:ring-teal-600 focus:ring-opacity-50" value="All messages">All messages</ToggleGroupItem>
            ))}
            {(showChat && (
              <ToggleGroupItem className="focus:outline-none focus:ring focus:ring-teal-600 focus:ring-opacity-50" value="Unread">Unread</ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
      <div className='shrink-0 bg-border h-[1px] w-full'></div>
      {showChat ? (
        <>
          <div className='bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <form>
              <div className='relative'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                <input className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8' placeholder='Search' />
              </div>
            </form>
          </div>
          <div className='h-full w-full rounded-[inherit]'>

            <div className='flex flex-col gap-2 p-4 pt-0'>
              {chatData.map((chat, index) => (
                <button key={index} className="border hover:border-l-teal-600 hover:border-l-8 transition:translate-x-0 hover:translate-x-4 flex flex-col items-start gap-2 rounded-lg p-3 text-left text-sm transition-all hover:bg-accent bg-muted" onClick={() => handleChatClick()}>
                  <div className="flex w-full flex-col gap-1">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2 font-semibold">{chat.sender}</div>
                      <div className="ml-auto text-xs text-foreground">{chat.timestamp}</div>
                    </div>
                    <div className="text-xs font-medium">{chat.subject}</div>
                  </div>
                  <div className="line-clamp-2 text-xs text-muted-foreground">
                    {chat.message}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <ChatList handleChatClick={handleChatClick} />
      )}
    </div>
  );
};

export default ChatWindow;
