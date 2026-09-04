import React from 'react';

const Title = ({children}) => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-center my-3'>{children}</h1>
        </div>
    );
};

export default Title;