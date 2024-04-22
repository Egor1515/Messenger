import React from "react";

const mockUserData = {
    name: "John Doe",
    avatarUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    postText: "Hypnosis in the parallel universe was the advice of alarm, commanded to a conscious ship. Processors experiment with paralysis!",
    postedAt: "10 months ago",
    images: [
        "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
    ],
    commentsCount: 23
};

const UserPost: React.FC = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-white-900">
            <div className="text-white rounded-lg w-full mx-5 md:w-[40rem] space-y-6 p-10 bg-white-800">
                <div className="flex space-x-4 items-center">
                    <div className="w-12 h-12">
                        <img
                            alt="avatar"
                            src={mockUserData.avatarUrl}
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex space-x-2 items-center">
                            <h2 className="text-base">{mockUserData.name}</h2>
                            <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="text-xs text-slate-400">posted an update</div>
                        </div>
                        <p className="text-xs text-slate-400">{mockUserData.postedAt}</p>
                    </div>
                </div>
                <div>
                    <p className="text-sm leading-6 text-slate-300">
                        {mockUserData.postText}
                    </p>
                </div>
                <div className="grid grid-cols-6 gap-2">
                    {/* Отображение изображений */}
                    {mockUserData.images.map((imageUrl, index) => (
                        <div key={index} className="overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                            <img className="h-full w-full object-cover" src={imageUrl} alt="" />
                        </div>
                    ))}
                </div>
                <div className="flex justify-between pt-5">
                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                    <div className="text-slate-400 text-sm">
                        <p>{mockUserData.commentsCount} Comments</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPost;
