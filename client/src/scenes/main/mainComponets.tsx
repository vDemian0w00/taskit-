import { Link } from "react-router-dom";
type PostTaskProps ={
  name:string
  idioma:"Ingles"|"Frances"|"Aleman"|"Italiano"|"Portugues"
  categoria:"Redacción"|"Pronunciación"|"Interpretación"
  des:string
}

export const PostTask = ({name, idioma, des, categoria}:PostTaskProps)=>{
    return(
      <Link to={"/main/posted-task"}>
        <div className="Post">
            <h1>{name}</h1>
            <div className="MidlePostTask">
              <p>Idioma: {idioma}</p>
              <p>Categoria: {categoria}</p>
            </div>
            <h2>Descripción:</h2>
          <div className="DesPostTask">{des}</div>
        </div>
      </Link>
    );
  };

  type PendingTaskProps = {
    name:string
    idioma:"Ingles"|"Frances"|"Aleman"|"Italiano"|"Portugues"
    date:string
  }
  export const PendientsTask = ({name, idioma, date}:PendingTaskProps)=>{
    return(
      <Link to={"/main/pending-task"}>
        <div className="Pendients">
            <h1>{name}</h1>
              <p>Idioma: {idioma}</p>
              <h2>Fecha: </h2>
              <h3>{date}</h3>
        </div>
      </Link>
    );
  };