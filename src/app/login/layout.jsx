import Title from '@/components/Title/Title';
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className='flex items-center gap-5 '>
            <div className='flex-2 bg-gray-500'>{children}</div>
            <div className='flex-1 bg-sky-500 p-4'>
                <Title>Welcome to authencation</Title>

            </div>
        </div>
    );
};

export default AuthLayout;