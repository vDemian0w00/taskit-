import React from "react";
import "index.css";
import "./main.css";
import { Navbar} from "@components/ComponentsGenerals";
import { Post } from "./mainComponets";

type Props = {};
export const Main = (props: Props) => {
  return (
    <div className="Main">
      <Navbar/>
      <div className="TitTasks">Tareas</div>
      <div className="TitPosts">Diarios</div>
      <div className="TitPeople">Personas</div>
      <div className="Tasks"></div>
      <div className="Posts">
      <Post/>
      <Post/>
      <Post/>   
      <Post/>
      <Post/>
      <Post/>
      <Post/>    
      <Post/>

      </div>
      <div className="People"></div>
    </div>
  );
};
