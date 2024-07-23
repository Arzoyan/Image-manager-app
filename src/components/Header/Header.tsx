import React from 'react';
import logo from "../../assets/logo.png"
import BackgroundImg from "../../assets/Background.png"


const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 h-[336px]" style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <div className="flex items-center justify-center ">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-8 w-auto"
                />
                <span className="text-lg font-bold">ImageMan</span>
            </div>
        </header>
    );
};

export default Header;
