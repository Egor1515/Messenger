import React, { useState } from "react";

const mockUserData = [
    {
        name: "John Doe",
        avatarUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        postText: "Hypnosis in the parallel universe was the advice of alarm, commanded to a conscious ship. Processors experiment with paralysis!",
        postedAt: "10 months ago",
        images: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        commentsCount: 23,
        liked: false
    },
    // Дополнительные данные пользователя...
];

const UserPost: React.FC = () => {
    const [userData, setUserData] = useState(mockUserData);

    const handleLikeToggle = (index: number) => {
        const updatedUserData = [...userData];
        updatedUserData[index] = { ...updatedUserData[index], liked: !updatedUserData[index].liked };
        setUserData(updatedUserData);
    };

    return (
        <div className="w-4/6 m-auto mt-4 mb-4 flex flex-col items-center bg-white-900">
            {userData.map((userData, index) => (
                <div key={index} className="text-white border rounded-lg w-full mt-5 mx-5 md:w-[40rem] space-y-6 p-10 bg-white-800">
                    <div className="flex space-x-4 items-center">
                        <div className="w-12 h-12">
                            <img alt="avatar" src={userData.avatarUrl} className="rounded-full w-full h-full object-cover" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex space-x-2 items-center">
                                <h2 className="text-black">{userData.name}</h2>
                                <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="text-xs text-slate-400">posted an update</div>
                            </div>
                            <p className="text-xs text-slate-400">{userData.postedAt}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm leading-6 text-slate-300">{userData.postText}</p>
                    </div>
                    <div className="overflow-hidden rounded-xl max-h-[10rem]">
                        <img className="h-full w-full object-cover" src={userData.images} alt={`Image for ${userData.name}`} />
                    </div>
                    <div className="flex justify-between pt-5">
                        <button onClick={() => handleLikeToggle(index)}>
                            <i className={`fa-${userData.liked ? "solid" : "regular"} fa-heart text-red-500`}></i>
                        </button>
                        <div className="text-slate-400 text-sm">
                            <p>{userData.commentsCount} Comments</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserPost;
