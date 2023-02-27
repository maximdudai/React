import React from "react";

import '../../App.css';

const Navbar = () => {
    return (
        <nav className="navBar w-full p-3 text-white text-right bg-slate-800 shadow-lg shadow-slate-800/50">
            <p
                className="uppercase text-mg underline p-2 cursor-pointer tracking-[2px]"
            >Sign Out</p>
        </nav>
    )
};
export default Navbar;