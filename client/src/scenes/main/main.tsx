import React from "react";
import "index.css";
import "./main.css";
import { Navbar } from "@components/ComponentsGenerals";
import { PostTask, PendientsTask } from "./mainComponets";
import useMediaQuery from "@hooks/useMediaQuery";
type Props = {};
export const Main = (props: Props) => {
  const TypeUser = false;
  const isAboveSmallScreens = useMediaQuery("(min-width: 770px)");
  return (
    <>
      {isAboveSmallScreens ? (
        <>
          {TypeUser ? (
            <div className="Main">
              <Navbar nameusu={"EXPERTO"} />
              <div className="TitTasks">Tareas</div>
              <div className="TitPosts">Diarios</div>
              <div className="TitPeople">Personas</div>
              <div className="Tasks"></div>
              <div className="Posts">
                <PostTask
                  name={"Proyecto final Prova"}
                  idioma={"Frances"}
                  des={
                    "tarea que necesito ya, no estoy seguro de la calidad que esta pueda prensetar por lo que necesito que corrigan los errores que seguramente tiene"
                  }
                  categoria={"Redacción"}
                />
              </div>
              <div className="People"></div>
            </div>
          ) : (
            <div className="Main">
              <Navbar nameusu={"USUARIO"} />
              <div className="TitTasks">Tareas</div>
              <div className="TitPosts">Diarios</div>
              <div className="TitPeople">Personas</div>
              <div className="Tasks">
                <PendientsTask
                  name={"Ensayo de Leon"}
                  idioma={"Aleman"}
                  date={"21/06/2023"}
                />
                <PendientsTask
                  name={"Guion de obra de teatro"}
                  idioma={"Frances"}
                  date={"02/09/2023"}
                />
                <PendientsTask
                  name={"Poema de flores"}
                  idioma={"Ingles"}
                  date={"01/11/2023"}
                />
                <PendientsTask
                  name={"Conversación"}
                  idioma={"Portugues"}
                  date={"24/02/2023"}
                />
              </div>
              <div className="Posts">
                <PostTask
                  name={"Proyecto final Prova"}
                  idioma={"Frances"}
                  des={
                    "tarea que necesito ya, no estoy seguro de la calidad que esta pueda prensetar por lo que necesito que corrigan los errores que seguramente tiene"
                  }
                  categoria={"Redacción"}
                />
                <PostTask
                  name={"Proyecto final Prova"}
                  idioma={"Frances"}
                  des={
                    "tarea que necesito ya, no estoy seguro de la calidad que esta pueda prensetar por lo que necesito que corrigan los errores que seguramente tiene"
                  }
                  categoria={"Redacción"}
                />
                <PostTask
                  name={"Proyecto final Prova"}
                  idioma={"Frances"}
                  des={
                    "tarea que necesito ya, no estoy seguro de la calidad que esta pueda prensetar por lo que necesito que corrigan los errores que seguramente tiene"
                  }
                  categoria={"Redacción"}
                />
              </div>
              <div className="People"></div>
            </div>
          )}
        </>
      ) : (
        <>MovileVersion</>
      )}
    </>
  );
};
