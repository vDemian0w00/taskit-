import React from "react";
import "./ComponentsGenerals.css";
import Image from "@assets/logo_taskit.png";
import "@components/ComponentsGenerals.css";

type NavbarProps = {
  color:string
}
export const Navbar = ({color}:NavbarProps) => {
  return (
    <div className={"Navbar "+color}>
      <div className="NavbarIn">
        <div className="LogoNavbar"></div>
        <div className="SearchNavbar"></div>
        <div className="ProfileNavbar"></div>
      </div>
    </div>
  );
};

{ 
  /* <div className='containerNavbar'>
        <div className='squartNavbar'>
            <div className='logoNavbar'>
              
            </div>
            <div className='search'></div>
            <div className='profile'></div>
        </div> */
}
