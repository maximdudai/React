import React from "react";
import Tilt from 'react-parallax-tilt';

import './Logo.css';

const Logo = () => {
    return (
        <div className="m-3 w-36 p-2">
            <Tilt>
                <div className="webLogo flex items-center justify-center w-32 h-32 rounded p-2">
                    <img 
                        className="p-2 rounded"
                        src="https://img.icons8.com/nolan/96/brain.png"
                        alt="smartbrain"
                    />
                </div>
            </Tilt>
        </div>
    )
};
export default Logo;