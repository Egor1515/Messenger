import React from 'react';
import './Authorize.css';
import { Input } from '../ui/input';
import { Button } from '../ui/button';


const Authorize = () => {
    return (
        <div className='container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
            <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                <div className='flex flex-col space-y-2 text-center'>
                    <h1 className='text-2xl font-semibold tracking-tight'>Create an account</h1>
                    <p className='text-sm text-muted-foreground'>Enter your email below to create your account</p>
                </div>
                <Input className='bg-black active:border-none w-full text-white' type="email" placeholder="name@example.com" />
                <Button className='w-full' variant="secondary" type="submit">Sign up with Email</Button>
                <p className='mt-2 text-gray-500 text-center continue-with'>Or continue with</p>
                <Button className='hover:bg-gray-600 w-full bg-black text-white' variant="secondary" type="submit">GitHub</Button>
                <p className='px-8 text-center text-sm text-muted-foreground'>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
            </div>
        </div>
    )
};

export default Authorize;