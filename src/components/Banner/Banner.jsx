"use client"


import { useRouter } from 'next/navigation';
import React from 'react';
import Title from '../Title/Title';
const Banner = () => {
    const result = useRouter();
    const handlerShare = ()=>{
        const password = prompt("Enter password 1234");
        if(password==1234){
            console.log(result);
            result.push('/dashboard')
            
        }
    }
    return (
        <div className=' text-center '>
            {/* <h1></h1>
             */}
             <Title>Welcome to developer story</Title>
            <button onClick={handlerShare} className='bg-pink-500 p-2 rounded-full'>Share Story</button>
        </div>
    );
};

export default Banner;