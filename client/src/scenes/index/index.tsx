import React from 'react'
import { Navbar } from '@components/ComponentsGenerals'
import './index.css'

type Props={}

const Index = (props:Props) => {
  return (
    <>
      <div className="conteinerIndex">
        <Navbar />
        <div className='index'>
          hola
        </div>
      </div>
    </>
  )
}

export default Index