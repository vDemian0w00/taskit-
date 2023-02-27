import React from 'react'
import './index.css'
import Logo from '@assets/logo_taskit.png'
import Organigram from '@assets/Organigrama.png'
/* Imports logos social medias */

import Instagram from "@assets/instagram.png"
import Facebook from "@assets/facebook.png"
import Email from "@assets/gmail.png"

import Image from '@assets/world.png'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

type Props = {}

const style1 = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  height: '65%',
  bgcolor: 'background.paper',
  boxShadow: 25,
  color: '#000',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '15vh'
};

const style2 = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  height: '65%',
  bgcolor: 'background.paper',
  boxShadow: 25,
  color: '#000',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '15vh'
};

const style3 = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  height: '65%',
  bgcolor: 'background.paper',
  boxShadow: 25,
  color: '#000',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '15vh'
};

const Index = (props: Props) => {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
import React from "react";
import "./index.css";
import Logo from "@assets/logo_taskit.png";
import useSolanaAccount from "@hooks/useSolanaAccount";
import {
  WalletConnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

type Props = {};

const Index = (props: Props) => {
  const { account, transactions } = useSolanaAccount();

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  return (
    <>
      <div className="conteinerIndex">

        <header className="header">

          <div className="logo">
            <img src={Logo} alt="Logo" className='image' />
          </div>

          <div className="otherEle">

            <div className='li1'>
              <button onClick={handleOpen1} className='Nosotros'>Nosotros</button>
              <Modal
                aria-labelledby="transition-modal-title1"
                aria-describedby="transition-modal-description1"
                open={open1}
                onClose={handleClose1}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open1}>
                  <Box sx={style1}>
                    <Typography id="transition-modal-title1">
                      <div className='firstText'>¿Quiénes somos?</div>
                    </Typography>
                    <Typography id="transition-modal-description1">
                      <div className="secondText1">Somos una empresa llamada "Euclid Tech" conformada por estudiantes de nivel medio superior la cual busca desarrollar software para resolver problemáticas que se presenten en diferentes sectores en la actualidad. A continuación te presentamos un pequeño organigrama para que puedas conocer a nuestro equipo.</div>                     
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </div>

            <div className='li2'>
              <button onClick={handleOpen2} className='Objetivo'>Objetivo</button>
              <Modal
                aria-labelledby="transition-modal-title2"
                aria-describedby="transition-modal-description2"
                open={open2}
                onClose={handleClose2}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open2}>
                  <Box sx={style2}>
                    <Typography id="transition-modal-title2">
                      <div className='firstText'>Nuestra misión y visión</div>
                    </Typography>
                    <Typography id="transition-modal-description2">
                      <div className="secondText1">Misión: Crear software a escala global que resuelva los problemas que afectan al mundo en el que vivimos, para personas de todas las edades.</div><div className='secondText2'>Visión: Nos vemos en 5 años en el top de empresas de desarrollo software, manteniendo los
                      altos estándares de calidad, así como los valores que Euclid Tech tendrá siempre en cuenta.</div>                     
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </div>

            <div className='li3'>
              <button onClick={handleOpen3} className='Contacto'>Contáctanos</button>
              <Modal
                aria-labelledby="transition-modal-title3"
                aria-describedby="transition-modal-description3"
                open={open3}
                onClose={handleClose3}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open3}>
                  <Box sx={style3}>
                    <Typography id="transition-modal-title3">
                      <div className='firstText'>Nuestras redes sociales</div>
                    </Typography>
                    <Typography id="transition-modal-description3">
                      <div className='iconsSocial'>
                        <div className="iconsS">

                          <Link to={'https://www.instagram.com/euclid_tech9/'} target="_blank" className="socialButtons">
                            <img src={Instagram} alt="LogoIg" className='imagesIcons' />
                            <p className="socialTexts">Instagram</p>
                          </Link>


                          <Link to={"https://www.facebook.com/profile.php?id=100090799624819"} target="_blank" className="socialButtons">
                            <img src={Facebook} alt="LogoFb" className='imagesIcons' />
                            <p className="socialTexts">Facebook</p>
                          </Link>


                          <Link to={"#"} onClick={(e) => {
                            window.location.href = "mailto:euclidtech9@gmail.com";
                            e.preventDefault();
                          }} target="_blank" className="socialButtons">
                            <img src={Email} alt="LogoEmail" className='imagesIcons' />
                            <p className="socialTexts">Gmail</p>
                          </Link>

                        </div>
                      </div>
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </div>

          </div>

          <div className='signButton'>
            <button className="button-30">SignUp</button>
          </div>

        </header>

        <div className="conteinerBoth">
          <div className='left'>

            <div className='contLeft'>

              <div className='centerLeft1'>
                ¿Quieres saber si lo estás haciendo correctamente? ¡Descúbrelo rápido!
              </div>

              <div className='centerLeft2'>
                Task It! Es una plataforma que te permite comprobar si estás realizando tus trabajos de manera correcta relacionados con algún idioma o, que sean hechos por expertos en el tema, siguiendo todas las reglas gramaticales y fonéticas de la lengua elegida.
              </div>

            </div>

          </div>

          <div className='right'>
            <div className="contImage">
              <svg fill='rgb(236, 248, 255)' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob'>
                <path d="M48.2,-75.7C60.4,-67.1,66.8,-50.3,73.3,-34C79.9,-17.8,86.5,-2.2,86.8,14.2C87.1,30.6,81,47.7,70,61C59,74.3,43.2,83.7,26.3,87.8C9.4,92,-8.5,90.9,-22.8,83.8C-37.2,76.8,-47.9,63.9,-59.9,51.2C-71.9,38.6,-85.1,26.4,-88.2,12.1C-91.2,-2.3,-84.1,-18.7,-76.2,-34.3C-68.3,-49.8,-59.6,-64.5,-46.8,-72.9C-33.9,-81.2,-17,-83.2,0.5,-84C18,-84.8,36,-84.4,48.2,-75.7Z" transform="translate(100 100)" />
              </svg>
              <img src={Image} alt="World" className='imageWorld' />
            </div>
          </div>
        </div>

          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default Index;
