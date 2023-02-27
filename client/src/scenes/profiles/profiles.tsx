import { useAppContext } from "@hooks/Contexts/AppProvider";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./profiles.css";
import ROUTES from "@utils/ROUTES";

const Profiles = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const { gilad, jason, antoine } = state;
  const { initialized, user } = useAppContext();

  return (
    <>
      <div className="containerOutNavbar">
        <div className="containerItems">
          <form className="containerRoles">
            <div onClick={handleOpen1} className="itemUsuario">
              <LightbulbIcon sx={{ fontSize: 120 }} className="iconItem" />
              <div className="containerDescription">
                <div>
                  <h1 className="tituloItem">Experto</h1>
                </div>
                <div>
                  <p className="descripcionItem">
                    ¿Eres un experto en algún idioma? ¿Quieres ganar dinero
                    ayudando a otros? ¡Registrate como Experto!
                  </p>
                </div>
              </div>
            </div>
            <Modal
              className="modalRegistro"
              open={open1}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              closeAfterTransition
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <form className="contenidoModalRegistroEx">
                <h1 className="tituloModal">Experto</h1>
                <TextField
                  id="nombre_exp"
                  label="Nombre"
                  variant="standard"
                  className="inputModalEx"
                />
                <TextField
                  id="correo_exp"
                  label="Correo"
                  variant="standard"
                  className="inputModalEx"
                />
                <TextField
                  id="contrasena_exp"
                  label="Contrasena"
                  variant="standard"
                  className="inputModalEx"
                  type="password"
                />
                <br />
                <Multiselect
                  isObject={false}
                  onKeyPressFn={function noRefCheck() {}}
                  onRemove={function noRefCheck() {}}
                  onSearch={function noRefCheck() {}}
                  onSelect={function noRefCheck() {}}
                  options={[
                    "Inglés",
                    "Francés",
                    "Alemán",
                    "Italiano",
                    "Portugués",
                  ]}
                  className="inputModalEx"
                  placeholder="Idioma(s)"
                />
                <br />
                <Multiselect
                  isObject={false}
                  onKeyPressFn={function noRefCheck() {}}
                  onRemove={function noRefCheck() {}}
                  onSearch={function noRefCheck() {}}
                  onSelect={function noRefCheck() {}}
                  options={["Redacción", "Interpretación", "Pronunciación"]}
                  className="inputModalEx"
                  placeholder="Categoria"
                />
                <br />
                <Button variant="contained" className="buttonModal">
                  <Link to={ROUTES.MAIN}>Enviar</Link>
                </Button>
              </form>
            </Modal>
            <Modal
              className="modalRegistro"
              open={open2}
              onClose={handleClose2}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              closeAfterTransition
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <form className="contenidoModalRegistroUs">
                <h1 className="tituloModal">Usuario</h1>
                <TextField
                  id="nombre_usu"
                  label="Nombre"
                  variant="standard"
                  className="inputModal"
                />
                <TextField
                  id="standard-basic"
                  label="Correo"
                  variant="standard"
                  className="inputModal"
                />
                <TextField
                  id="standard-basic"
                  label="Contrasena"
                  variant="standard"
                  className="inputModal"
                  type="password"
                />
                <br />
                <Button variant="contained" className="buttonModal">
                  Enviar
                </Button>
              </form>
            </Modal>
            <div onClick={handleOpen2} className="itemExperto">
              <PersonIcon sx={{ fontSize: 120 }} className="iconItem" />
              <div className="containerDescription">
                <div>
                  <h1 className="tituloItem">Usuario</h1>
                </div>
                <div>
                  <p className="descripcionItem">
                    ¿Quieres aprender de los mejores? ¿Quieres aprender de
                    expertos? ¡Registrate como Usuario!
                  </p>
                </div>
              </div>
            </div>
          </form>
          <div className="pregunta">
            <div className="textQuestion">¿Qué tipo de usuario eres?</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiles;
