import { Navbar } from "../../components/ComponentsGenerals";
import "./profiles.css";
import useSolanaAccount from "@hooks/useSolanaAccount";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useState } from "react";

const Profiles = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="containerNavbar">
        <Navbar />
      </div>

      <div className="containerOutNavbar">
        <div className="containerItems">
          <form className="containerRoles">
            <div onClick={handleOpen} className="itemUsuario">
            </div>
            <Modal
              className="modalRegistro"
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <form className="contenidoModalRegistro">
                <h1 className="tituloModal">Experto</h1>
                <label className="labelModal">Nombre</label>
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <Button variant="contained" className="labelModal">Enviar</Button>
              </form>
            </Modal>
            <div className="itemExperto"></div>
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
