import ROUTES from '@utils/ROUTES'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './task.css'

type Props={
    viewTitle:string
    taskName:string
    info:string
    usExpertFlag:boolean
    exPostFlag:boolean
    exAcceptFlag:boolean
    usAcceptFlag:boolean
}

export const Task = ({taskName,viewTitle,exAcceptFlag,exPostFlag,usExpertFlag,usAcceptFlag,info }:Props) => {
    
    return (
        <div className='conteinerTASK'>
            <div className='taskAll'>

                <div className='contTasks'>

                    <div className='titleT'>
                        {viewTitle}
                    </div>

                    <div className="taskName">
                        {usExpertFlag ? (
                            <>  
                                <div className='contTN'>El experto quiere hacer tu tarea: {taskName}</div>
                            </>
                        ) : (
                            <>  
                                <div className='contTN'>Tarea: {taskName}</div>
                            </>
                        )}
                        {/* <div className='contTN'>{taskName}</div> */}
                    </div>

                    <div className="conteinerInfo">
                        {usExpertFlag ? (
                            <>  
                                <div className='info'>Información del experto: {info}</div>
                            </>
                        ) : (
                            <>  
                                <div className='info'>Información de la tarea: {info}</div>
                            </>
                        )}
                    </div>

                    <div className="conteinerButtons">
                        
                        {usExpertFlag ? (
                            <>  
                                <div className="contBtns">
                                    <Link to={ROUTES.MAIN} className="confirm">
                                        <i className="fa-solid fa-check btnConfirm"></i>
                                        Confirmar
                                    </Link>
                                    <Link to={ROUTES.MAIN} className="descart">
                                        <i className="fa-solid fa-xmark btnDescart"></i>
                                        Descartar
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <></>
                        )}

                        {exAcceptFlag ? (
                            <>
                                <div className="contBtns">
                                    <Link to={ROUTES.MAIN} className="confirm">
                                        <i className="fa-regular fa-paper-plane btnConfirm"></i>
                                        Entregar
                                    </Link>
                                    <Link to={ROUTES.MAIN} className="descart">
                                        <i className="fa-solid fa-xmark btnDescart"></i>
                                        Cancelar
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                            
                            </>
                        )}

                        {usAcceptFlag ? (
                            <>
                                <div className="contBtns">
                                    <Link to={''} className="edit">
                                        <i className="fa-regular fa-edit btnEdit"></i>
                                        Editar
                                    </Link>
                                    <Link to={ROUTES.MAIN} className="descart">
                                        <i className="fa-solid fa-xmark btnDescart"></i>
                                        Cancelar
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                            
                            </>
                        )}

                        {exPostFlag ? (
                            <>
                                <div className="contBtns">
                                    <Link to={ROUTES.MAIN} className="confirm">
                                        <i className="fa-solid fa-check btnConfirm"></i>
                                        Aceptar
                                    </Link>
                                    <Link to={"#"} onClick={(e) => {
                                    window.location.href = "mailto:euclidtech9@gmail.com";
                                    e.preventDefault();
                                    }} target="_blank" className="contact">
                                        <i className="fa-solid fa-user btnContact"></i>
                                        Contactar
                                    </Link>
                                    <Link to={ROUTES.MAIN} className="descart">
                                        <i className="fa-solid fa-xmark btnDescart"></i>
                                        Descartar
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                            
                            </>
                        )}

                    </div>

                </div>
                
            </div>
        </div>
    )
}

