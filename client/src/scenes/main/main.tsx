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

    </div>
  );
};
