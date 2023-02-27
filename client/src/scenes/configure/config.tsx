import "./config.css";
import TextField from "@mui/material/TextField";
import LogoutIcon from "@mui/icons-material/Logout";
import SaveIcon from "@mui/icons-material/Save";
import { ContenedorPerfil } from "./components/componentsConfigure";

const ConfigUser = () => {
  return (
    <>
      <div className="containerMain">
        <div className="containerBodySeccion">
          <div className="containerForm">
            <div className="containerLevel1">
              <div className="titleForm">Mi Perfil</div>
            </div>
            <div className="containerLevel2">
              <div className="containerLabels">
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Nombre"
                  variant="filled"
                />
              </div>
            </div>
            <div className="containerLevel3">
              <div className="containerLabels">
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Correo"
                  variant="filled"
                />
              </div>
            </div>
            <div className="containerLevel4">
              <div className="containerLabels">
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Contraseña"
                  variant="filled"
                />
              </div>
            </div>
            <div className="containerLevel5">
              <div className="containerButton">
                <SaveIcon sx={{ fontSize: 50 }} />
              </div>
              <div className="containerButton">
                <LogoutIcon sx={{ fontSize: 50 }} />
              </div>
            </div>
          </div>
        </div>
        <ContenedorPerfil/>
      </div>
    </>
  );
};

export default ConfigUser;
