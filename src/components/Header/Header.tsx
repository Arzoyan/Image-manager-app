import React from 'react';
import logo from "../../Assets/logo.png"
import BackgroundImg from "../../Assets/Background.png"


const Header: React.FC = () => {
    return (
        <header className="relative top-0 left-0 right-0 bg-white shadow-md " >
            <img
                className='w-[100%] max-w-[100%] object-cover'
                src={BackgroundImg}
                alt="BackgroundImg"
            />


            <div className="absolute flex items-center justify-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-12 mr-[6px] "
                />
                <span className="text-6xl font-bold text-[#FFF]">ImageMan</span>
            </div>
        </header>
    );
};

export default Header;
