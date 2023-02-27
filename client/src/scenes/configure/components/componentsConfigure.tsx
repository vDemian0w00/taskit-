import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const ContenedorPerfil = () => {
  return (
    <div className="containerPerfilLeft">
          <div className="containerIntPerfilComplete">
            <div className="containerImageProfile"></div>
          </div>
          <div className="containerData">
            <div className="textWelcome">Bienvenido Ian Daniel</div>
            <div className="buttonEdit">
              <div className="iconEdit">
                <EditOutlinedIcon sx={{ fontSize: 40 }} />
              </div>
              <div className="textEditProfile">Editar Perfil</div>
            </div>
          </div>
        </div>
  )
}
