import React from "react";
import 'index.css';
import './main.css'
import { Navbar } from "../../components/ComponentsGenerals";

type Props = {}
export const Main = (props:Props) =>{
    return(
        <div className="Main">
            <div className='Navbar'>
                <div className='squartNavbar'>
                    <div className='logoNavbar'></div>
                    <div className='search'></div>
                    <div className='profile'></div>
                </div>
            </div>
            <div className="Tasks"></div>
        </div>
    );
};