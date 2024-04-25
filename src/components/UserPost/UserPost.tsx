import React, { useEffect, useState } from "react";
import { IUserPostData } from "@/types/IUserPostData";

const UserPost: React.FC = () => {
    const [userData, setUserData] = useState<IUserPostData[]>([]);
    
    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const response = await fetch("http://localhost/api/user-posts.php");
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error("Failed to fetch user posts");
                }
            } catch (error) {
                console.error("Error fetching user posts:", error);
            }
        };
    
        fetchUserPosts();
    }, []);
    
    const handleLikeToggle = (index: number) => {
        const updatedUserData = [...userData];
        const updatedPost = { ...updatedUserData[index] };
        updatedPost.liked = !updatedPost.liked;
        updatedPost.likesCount = updatedPost.liked ? updatedPost.likesCount + 1 : updatedPost.likesCount - 1;
        updatedUserData[index] = updatedPost;
        setUserData(updatedUserData);
    };

    return (
<div className=" m-auto mt-4 mb-4 flex flex-col items-center bg-white-900 w-full h-full">
            {userData.map((userData, index) => (
                <div key={index} className="text-black border border-emerald-200 rounded-lg mt-5 mx-5 md:w-[40rem] space-y-6 p-10 bg-white-800">
                    <div className="flex space-x-4 items-center ">
                        <div className="w-12 h-12">
                            <img alt="avatar" src={userData.avatarUrl} className="rounded-full w-full h-full object-cover" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex space-x-2 items-center">
                                <h2 className="text-black">{userData.name}</h2>
                                <svg className="h-4 w-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="text-xs text-slate-600">posted an update</div>
                            </div>
                            <p className="text-xs text-slate-400">{userData.postedAt}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm leading-6 text-slate-600">{userData.postText}</p>
                    </div>
                    <div className="overflow-hidden rounded-xl max-h-[10rem]">
                        <p> {userData.content}</p>
                    </div>
                    <div className="flex justify-between pt-5">
                        <button onClick={() => handleLikeToggle(index)}>
                            <i className={`fa-${userData.liked ? "solid" : "regular"} fa-heart text-emerald-500`}></i>
                        </button>
                        <div className="text-slate-400 text-sm">
                            <p>{userData.likesCount} likes</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserPost;
