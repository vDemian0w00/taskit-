import React from "react";
import 'index.css';
import './main.css'
import { Navbar } from "../../components/ComponentsGenerals";

type Props = {}
export const Main = (props:Props) =>{
    return(
        <div className="Main">
            <Navbar/>
            <div className="Tasks"></div>
            <div className="Posts"></div>
            <div className="People"></div>
        </div>
    );
};