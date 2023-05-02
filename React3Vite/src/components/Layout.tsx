import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            Layout
            <ul>
                <li><NavLink to="/">Home</NavLink></li> {/*NavLink fa in modo che il tag a abbia una caratteristica class=active
                Il che ci permette di fare cose pazzurde come : .active{bgcolor:red} */}
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
            
            <Outlet/> {/* Indicha dove vengono mandati i children di layout*/}
        </div>
    );
};

export default Layout;