import React, { useState } from 'react'
import './task.css'

type Props={
    viewTitle:string
    taskName:string
}

const Task = ({taskName,viewTitle}:Props) => {
    
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
                </div>
                
            </div>
        </div>
    )
}

export default Task
