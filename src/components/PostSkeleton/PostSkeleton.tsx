import React, { useState } from "react";

const PostSkeleton: React.FC<{ onPost: (newPost: any) => void }> = ({ onPost }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handlePost = () => {
        const newPost = {
            name: "John Doe",
            avatarUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            postText: description,
            postedAt: new Date().toLocaleString(),
            images: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            likesCount: 0,
            liked: false
        };

        onPost(newPost);
        setTitle("");
        setDescription("");
    };

    return (
        <div>
            <div className="heading text-center font-bold text-2xl m-5 text-gray-800">Tell people something new</div>
            <div className="rounded bg-orange-200 editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                <input
                    className="title bg-white-200 border border-gray-300 p-2 mb-4 outline-none"
                    placeholder="Title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="description bg-white-200 sec p-3 h-60 border border-gray-300 outline-none"
                    placeholder="Describe everything about this post here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <div className="icons flex text-gray-500 m-2">
                </div>
                <div className="buttons flex">
                    <div
                        className="btn border bg-white rounded border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
                        onClick={() => {
                            setTitle("");
                            setDescription("");
                        }}
                    >
                        Cancel
                    </div>
                    <div
                        className="btn border rounded p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-orange-500"
                        onClick={handlePost}
                    >
                        Post
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostSkeleton;
