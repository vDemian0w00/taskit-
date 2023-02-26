import React from 'react'
import './index.css'
import Logo from '@assets/logo_taskit.png'
 
type Props={}

const Index = (props:Props) => {
  return (
    <>
      <div className="conteinerIndex">    

          <header className="header">

            <div className="logo">
              <img src={Logo} alt="Logo" className='image' />
            </div>

            <div className="otherEle">
              <div className='li1'><a href="/" className='Nosotros'>Nosotros</a></div>
              <div className='li2'><a href="/" className='Quienes'>¿Quiénes somos?</a></div>
              <div className='li3'><a href="/" className='Contacto'>Contáctanos</a></div>
            </div>
            <div className='loginButton'><a href=""></a></div>
          </header>

          <div className="conteinerBoth">
            <div className='left'>

              <div className='contLeft'>

                <div className='centerLeft1'>
                  Do you have an idiom task? Get it fast!
                </div>

                <div className='centerLeft2'>
                  Task It it's a platform that allows you to get your idiom task done in a fast and easy way. 
                  You can help others with their tasks and get paid for it.
                </div>

              </div>

            </div>
  
            <div className='right'>
  
            </div>
          </div>

      </div>
    </>
  )
}

export default Index