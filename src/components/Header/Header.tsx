import React from 'react';
import logo from "../../assets/logo.png"
import BackgroundImg from "../../assets/Background.png"


const Header: React.FC = () => {
    return (
        <header className="relative top-0 left-0 right-0 bg-white shadow-md " >
            <img
                src={BackgroundImg}
                alt="BackgroundImg"
            />


            <div className="absolute flex items-center justify-center  top-1/2 left-1/2 ">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-8 w-auto mr-[6px]"
                />
                <span className="text-lg font-bold text-[#FFF]">ImageMan</span>
            </div>
        </header>
    );
};

export default Header;
