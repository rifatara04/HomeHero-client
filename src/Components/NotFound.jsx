import React from 'react';
import notFoundImg from '../assets/error-404.png'
import { useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={notFoundImg} alt="" />
            <h1 className='font-bold text-3xl text-base-content text-center my-4'>Oops ! Sorry Page Is Not Found</h1>
            <button onClick={()=>navigate(-1)} className='btn btn-primary'>Go back</button>
        </div>
    );
};

export default NotFound;