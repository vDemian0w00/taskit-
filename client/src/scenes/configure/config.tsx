import "./config.css";
import TextField from "@mui/material/TextField";
import LogoutIcon from "@mui/icons-material/Logout";
import SaveIcon from "@mui/icons-material/Save";
import { ContenedorPerfil } from "./components/componentsConfigure";
import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const ConfigUser = () => {
  const [userEdit, setUserEdit] = useState(true);
  const handleEdit = () => {
    setUserEdit(!userEdit);
  };
  return (
    <>
      <div className="containerMain">
        <div className="containerBodySeccion">
        <button className="buttonChange" onClick={handleEdit}/>
          <div className="containerForm">
            {userEdit ? (
              <>
                <div className="containerLevel1">
                  <div className="titleForm">Mi Cuenta (Usuario)</div>
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
              </>
            ) : (
              <>
                <div className="containerLevel1">
                  <div className="titleForm">Mi Cuenta (Experto)</div>
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
                <div className="containerLevel4_5">
                    <div className="containerLabels">
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
                        ]}
                        className="inputModalEx"
                        placeholder="Idioma(s)"
                      />
                    </div>
                    <div className="containerLabels">
                      <Multiselect
                        isObject={false}
                        onKeyPressFn={function noRefCheck() {}}
                        onRemove={function noRefCheck() {}}
                        onSearch={function noRefCheck() {}}
                        onSelect={function noRefCheck() {}}
                        options={[
                          "Redacción",
                          "Interpretación",
                          "Pronunciación",
                        ]}
                        className="inputModalEx"
                        placeholder="Categoria"
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
              </>
            )}
          </div>
        </div>
        <ContenedorPerfil />
      </div>
    </>
  );
};

export default ConfigUser;
