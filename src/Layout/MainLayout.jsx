import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
           <div className='h-16'>
            <Toaster></Toaster>
           <Navbar></Navbar>
           </div>
            <div className='min-h-[calc(100vh-300px)]'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;