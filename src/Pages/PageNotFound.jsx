import React from 'react';
import { useNavigate } from 'react-router';

const PageNotFound = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    return (
        <div className='w-full text-center space-y-4'>
            <img className='mx-auto' src="../../public/assets/error-404.png" alt="" />
            <h3 className='text-5xl font-semibold mt-10'>Opps, page not found</h3>
            <p className='text-xl text-gray-600'>The page you are looking for is not available</p>
            <button className='btn primary-bg text-white ' onClick={handleClick}>Go back</button>
        </div>
    );
};

export default PageNotFound;