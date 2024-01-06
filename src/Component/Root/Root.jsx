import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='container mx-4'>
                <Header></Header>
            </div>
            <div className='container mx-auto min-h-[76vh]'>
                <Outlet></Outlet>
            </div>
            <div className='container mx-auto'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;