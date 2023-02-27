import React from "react";
import "./ComponentsGenerals.css";
import "@components/ComponentsGenerals.css";
import Logo from "@assets/LogoColors.png";


export const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="ProfileNavbar">
          <div className="PhotoUser">
            <div className="CirUser">
              <div className="CirUserIn">

              </div>
            </div>
          </div>
          <div className="NameUser">
            <h2>Puto</h2>
            <p>Filosofo</p>
          </div>
        </div>
        <div className="SearchNavbar">
          <div className="navicon"><i className="fa-solid fa-magnifying-glass"></i></div>
          <div className="navinput"><input type="text" /></div>
        </div>
        <div className="LogoNavbar">
            <img src={Logo} className='Logo'/> 
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