import React, { FC } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { BiHome, BiSave } from "react-icons/bi"

const SideBar: FC = () => {
    return (
        <>
            <div className="flex bg-gray-100">
                <div className="w-64 bg-white shadow-lg flex flex-col sticky top-0 h-screen">
                    <div className="p-4 flex items-center justify-center border-b">
                        <h1 className="text-2xl font-bold text-gray-800"><Link to="/">MyNews</Link></h1>
                    </div>
                    <nav className="flex-1 p-4 overflow-y-auto">
                        <NavLink to="home" className="flex items-center p-2 rounded hover:bg-gray-200">
                            <BiHome className="text-gray-600 mr-2" />
                            <span className="text-gray-600 font-medium">Home</span>
                        </NavLink>
                        <NavLink to="saved" className="flex items-center p-2 rounded hover:bg-gray-200">
                            <BiSave className="text-gray-600 mr-2" />
                            <span className="text-gray-600 font-medium">Saved</span>
                        </NavLink>
                    </nav>
                </div>
                <main className="flex-1 p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default SideBar;
