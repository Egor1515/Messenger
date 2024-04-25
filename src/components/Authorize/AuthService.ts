import { NavigateFunction } from 'react-router-dom';
import { useState } from 'react';
import { ILoginData } from '@/types/ILoginData';

let navigate: NavigateFunction | null = null;

const AuthService = {
    
    initialize: (navigateFunction: NavigateFunction): void => {
        navigate = navigateFunction;
    },

    login: (data: ILoginData): boolean => {
        const { email, password } = data;
        const fakeKey = '898qweqwejqo4274qoij4124';

        if (email && password) {
            localStorage.setItem('username', fakeKey);
            return true;
        }

        return false;
    },

    async handleLogin(email: string, password: string): Promise<string | null> {
        try {
            const response = await fetch('http://localhost:8888/api/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            if (data.token) {
                return data.token;
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (error) {
            console.error('Error during login:', error);
            return null; 
        }
    },

    isAuthorized: (): boolean => {
        const username = localStorage.getItem('username');
        return !!username;
    },
};

export default AuthService;
