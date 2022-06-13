import React from 'react';

import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

const DashboardLayout=({children}) => {
    return (
        <>
        <NavBar/>
        {children}
        <Footer/>
        </>
    );
}

export default DashboardLayout;