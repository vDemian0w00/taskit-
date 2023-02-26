import React from "react";
import "./ComponentsGenerals.css";
import "@components/ComponentsGenerals.css";
import Modal from "@mui/material/Modal";
import { useState } from "react";


export const Navbar = () => {
  return (
    <div className="Navbar">
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
