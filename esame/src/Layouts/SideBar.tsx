import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <>
            <nav>
                <NavLink to="/" />
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default SideBar;