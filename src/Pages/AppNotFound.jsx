import React from 'react';
import { useNavigate } from 'react-router';

const AppNotFound = () => {
     const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    return (
         <div className='w-full text-center space-y-4'>
            <img className='mx-auto' src="../../public/assets/App-Error.png" alt="" />
            <h3 className='text-5xl font-semibold mt-10'>Opps, app not found</h3>
            <p className='text-xl text-gray-600'>The app you are looking for is not available</p>
            <button className='btn primary-bg text-white ' onClick={handleClick}>Go back</button>
        </div>
    );
};

export default AppNotFound;