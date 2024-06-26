import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from './AuthService';

const Authorize: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        try {
            const token = await AuthService.login({email,password});
            if (token) {
                navigate('/home');
            } else {
                setError('Failed to login');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Failed to login');
        }
    };

    return (
        <div className="flex flex-col w-full h-full bg-white-100">
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                    px-6 py-10 sm:px-10 sm:py-6 
                    bg-white rounded-lg shadow-md lg:shadow-lg">
                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                        Login
                    </h2>
                    <form className="mt-10" onSubmit={handleLogin}>
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="e-mail address"
                            className="block w-full py-3 px-1 mt-2 
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required
                        />
                        <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="password"
                            className="block w-full py-3 px-1 mt-2 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-3 mt-10 bg-orange-500 rounded-sm
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-orange-600 hover:shadow-none"
                        >
                            Login
                        </button>
                        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                            <a href="#" className="flex-2 underline">
                                Forgot password?
                            </a>
                            <p className="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                                or
                            </p>
                            <a href="#" className="flex-2 underline">
                                Create an Account
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Authorize;
