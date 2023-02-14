import React from 'react';
import '../../App.css'

import { FaGithub } from 'react-icons/fa';

const Navbar = () => {

    return (
        <nav className='bg-slate-800 w-full flex justify-center border-b-orange-400 text-white p-4  shadow-lg shadow-blue-500/50'>
            <div className='github-link'>
                <a 
                    className='text-4xl'
                    target={'_blank'} rel={'noreferrer'}
                    href='https://github.com/maximdudai'>

                    <FaGithub /> 
                </a>
            </div>
        </nav>
    )
};
export default Navbar;