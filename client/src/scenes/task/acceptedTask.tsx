import React from 'react'
import {Task} from '@scenes/task/componentsTask'

type Props={}

const acceptedTask = (props:Props) => {
    return (
        <>
            <Task viewTitle={'Tareas aceptadas'}
            taskName={'Tarea 1'}
            usExpertFlag={false}
            exPostFlag={false}
            exAcceptFlag={true}
            usAcceptFlag={false} 
            info={''} />
        </>
    )
}

export default acceptedTask
