import React, { useEffect, useState } from "react"
import { ChatInfoInterface } from "@/types/ChatInfoInterface"
import ChatList from "../ChatList/Chatlist"
import { formatDistanceToNow } from "date-fns";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group"

const AllChats: React.FC = () => {
    const [showChat, setShowChat] = useState(true);
    const [chatData, setChatData] = useState<ChatInfoInterface[]>([])

    const handleChatClick = () => {
        setShowChat(prevState => !prevState)
    };

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                const response = await fetch('http://localhost/api/chats.php')
                if (!response.ok) {
                    throw new Error('Failed to fetch chat data')
                }
                const data = await response.json();
                const updatedChatData = data.map((chat: any) => ({
                    ...chat,
                    timestamp: formatDistanceToNow(new Date(chat.timestamp), { addSuffix: true }),

                }));
                setChatData(updatedChatData);
            } catch (error) {
                console.error('Error fetching chat data:', error)
            }
        };

        fetchChatData()
    }, []);

    return (
        <div className='h-full w-full'>
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
                                <ToggleGroup className="flex justify-end mt-3" type="single">
                                    <ToggleGroupItem value="Work">Work</ToggleGroupItem>
                                    <ToggleGroupItem value="Life">Life</ToggleGroupItem>
                                    <ToggleGroupItem value="Balance">Balance</ToggleGroupItem>
                                </ToggleGroup>

                            </div>
                        </form>
                    </div>
                    <div className='flex flex-col gap-2 p-4 pt-0'>
                        {chatData.map((chat, index) => (
                            <button
                                key={index}
                                className={`border ${chat.unread ? 'border-white-200' : 'border-orange-200'} hover:border-l-orange-500 hover:border-l-8 transition:translate-x-0 hover:translate-x-4 flex flex-col items-start gap-2 rounded-lg p-3 text-left text-sm transition-all ${chat.unread ? 'bg-orange-200' : 'bg-white-200'}`}
                                onClick={() => handleChatClick()}
                            >
                                <div className="flex w-full flex-col gap-1 bg-orangy-200">
                                    <div className="flex gap-2 w-full items-center">
                                        <div className="flex items-center gap-2 font-semibold">{chat.sender}</div>
                                        {chat.unread && <span className="flex h-2 w-2 rounded-full bg-orange-600"></span>}
                                    </div>
                                    <div className="ml-auto text-xs text-foreground">{chat.timestamp}</div>
                                    <div className="text-xs font-medium">{chat.subject}</div>
                                    <div className="flex items-center gap-2">
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">Work</div>
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Life</div>
                                        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Balance</div>
                                    </div>
                                </div>
                                <div className="line-clamp-2 text-xs text-muted-foreground">{chat.message}</div>
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <ChatList />
            )}
        </div>
    );
};

export default AllChats;
