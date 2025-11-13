import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import Spinner from '../Components/Spinner';

const RootLayout = () => {
    const navigation = useNavigation();
    return (
        <div className='container mx-auto px-5 flex flex-col justify-between min-h-screen'>
        <Navbar/>
        <div className='py-8'>
           {navigation.state==="loading" ?<Spinner/> : <Outlet/>}
        </div>
        <Footer/>
        <ToastContainer/>
        </div>
    );
};

export default RootLayout;