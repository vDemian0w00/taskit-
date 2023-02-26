import React from "react";
import "./ComponentsGenerals.css";  
import Image from "@assets/logo_taskit.png";
import '@components/ComponentsGenerals.css'

export const Navbar = () => {
  return (
    <div className='containerNavbar'>
        <div className='squartNavbar'>
            <div className='logoNavbar'>
              
            </div>
            <div className='search'></div>
            <div className='profile'></div>
        </div>
    </div>
  );
};
