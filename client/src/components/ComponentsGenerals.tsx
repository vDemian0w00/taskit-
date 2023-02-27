import React from "react";
import "./ComponentsGenerals.css";
import "@components/ComponentsGenerals.css";
import Logo from "@assets/LogoColors.png";
import { Link } from "react-router-dom";
import Photo from "@assets/User.png";
type PropsUser = {
  nameusu:string
}
export const Navbar = ({nameusu}:PropsUser) => {
  return (
    <div className="Navbar">
        <div className="ProfileNavbar">
          <div className="PhotoUser">
          <Link to={"/"}>
            <div className="CirUser">
               <img src={Photo} className='photousu'/> 
            </div>
          </Link>
          </div>
          <div className="NameUser">
            <h2>{nameusu}</h2>
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
