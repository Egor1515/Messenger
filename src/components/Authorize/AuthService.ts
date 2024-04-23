import { NavigateFunction } from 'react-router-dom';

interface LoginData {
    username: string;
    password: string;
}

let navigate: NavigateFunction | null = null;

const AuthService = {
    initialize: (navigateFunction: NavigateFunction): void => {
        navigate = navigateFunction;
    },

    login: (data: LoginData): boolean => {
        const { username, password } = data;
        const fakeKey = '898qweqwejqo4274qoij4124';

        if (username && password) {
            localStorage.setItem('username', fakeKey);
            return true;
        }

        return false;
    },

    handleLogin: (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (!navigate) {
            console.error('Navigation function is not initialized.');
            return;
        }

        const formData = new FormData(event.currentTarget);
        const username = formData.get('email') as string;
        const password = formData.get('password') as string;

        const loginSuccess = AuthService.login({ username, password });
        if (loginSuccess) {
            navigate('/home');
            console.log('Login successful');
        } else {
            console.log('Invalid username or password');
        }
    },

    isAuthorized: (): boolean => {
        const username = localStorage.getItem('username');
        return !!username;
    },
};

export default AuthService;
