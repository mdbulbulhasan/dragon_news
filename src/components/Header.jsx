import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns';


const Header = () => {
    return (
      <div className="flex justify-center items-center space-y-3 flex-col mt-5">
        <img src={logo} alt="" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p className='font-semibold text-accent'>{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>
      </div>
    );
};

export default Header;