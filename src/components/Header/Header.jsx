import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="text-start  bg-sky-500 p-4 rounded-2xl text-black flex justify-between items-center flex-wrap">
            <Link className='font-bold text-3xl' href={'/'}>Developer Story</Link>
            {/* navbar code here */}
            <nav className='flex gap-4'>
                <Link href={'/about'}>About</Link>
                <Link href={'/devStorys'}>DevStorys</Link>
                <Link href={'/login'}>Login</Link>
                <Link href={'/about/contact'}>Contact</Link>
                <Link href={'/about/teams'}>Teams</Link>
                {/* special */}
                {/* <Link href={'/dashboard'}>DashBoard</Link> */}
            </nav>
        </header>
    );
};

export default Header;