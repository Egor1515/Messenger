import { NewPostInterface } from "@/types/NewPostInterface";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostSkeleton: React.FC<{ onPost: (newPost: any) => void }> = ({ onPost }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const handlePost = async () => {
        const newPost: NewPostInterface = {
            name: "John Doe",
            avatarUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            postText: description,
            postedAt: new Date().toISOString(),
            content: title,
            likesCount: 0,
            liked: false
        };

        try {
            const response = await fetch('http://localhost/api/new-post.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newPost)
            });

            if (!response.ok) {
                throw new Error('Failed to create new post');
            }
            const data = await response.json();
            onPost(newPost);
            setTitle("");
            setDescription("");
            navigate('/notifications')
        } catch (error) {
            console.error('Error creating new post:', error);
        }
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
                            navigate('/notifications')
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
