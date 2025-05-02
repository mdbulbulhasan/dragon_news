import React from 'react';
import logo from "../assets/logo.png"
import "../App.css";

const Header = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={logo} alt="" />
            
        </div>
    );
};

export default Header;