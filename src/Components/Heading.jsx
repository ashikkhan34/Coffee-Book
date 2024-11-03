import React from 'react';

const Heading = ({title,subTitle}) => {
    return (
        <div className='flex flex-col w-full items-center my-10'>
            <h1 className='text-lg md:text-2xl lg:text-4xl font-thin mb-3'>{title}</h1>
            <p className='text-xs md:text-base text-gray-600 font-thin'>{subTitle}</p>
        </div>
    );
};

export default Heading;