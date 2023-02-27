import React, { useState } from 'react'
import './task.css'

type Props={
    viewTitle:string
    taskName:string
    expertFlag:boolean
    exPostFlag:boolean
    exAcceptFlag:boolean
    usAcceptFlag:boolean
}

export const Task = ({taskName,viewTitle,exAcceptFlag,exPostFlag,expertFlag,usAcceptFlag }:Props) => {
    
    return (
        <div className='conteinerTASK'>
            <div className='taskAll'>

                <div className='contTasks'>

                    <div className='titleT'>
                        {viewTitle}
                    </div>

                    <div className="taskName">
                        <div className='contTN'>{taskName}</div>
                    </div>

                    <div className="conteinerButtons">
                        {exPostFlag ? (
                            <>  
                                
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

