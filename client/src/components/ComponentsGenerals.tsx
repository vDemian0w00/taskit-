import React from "react";
import "./ComponentsGenerals.css";
import "@components/ComponentsGenerals.css";
import Logo from "@assets/LogoTritaskit.png";


export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="NavbarIn">
        <div className="LogoNavbar">
          <div className="CirLogo">
            <img src={Logo} className='Logo'/> 
          </div>
        </div>
        <div className="SearchNavbar">
          <div className="navicon"><i className="fa-solid fa-magnifying-glass"></i></div>
          <div className="navinput"><input type="text" /></div>
        </div>
        <div className="ProfileNavbar"></div>
      </div>
    </div>
  );
};
type PostProps ={
  name:string
  idioma:"Ingles"|"Frances"|"Aleman"|"Italiano"|"Portugues"
  kind:"Redacción"|"Pronunciación"
  des:string
  date:string
  area:string
}
export const Post = ()=>{
  return(
    <div className="Post">

    </div>
  );
};