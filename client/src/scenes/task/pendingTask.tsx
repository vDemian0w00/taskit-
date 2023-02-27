import React from 'react'
import {Task} from '@scenes/task/componentsTask'

type Props={}

const pendingTask = (props:Props) => {
    return (
        <>
            <Task viewTitle={'Tarea pendiente que hará el Experto'} 
            taskName={'Tarea English'} 
            usExpertFlag={false} 
            exPostFlag={false} 
            exAcceptFlag={false} 
            usAcceptFlag={true} 
            info={''} />
        </>
    )
}

export default pendingTask
