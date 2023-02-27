import React from 'react'
import { Main } from '@scenes/main/main'
import Task from '@scenes/task/task'
import ROUTES  from '@utils/ROUTES/index'
import { Route, Routes } from "react-router-dom";

type Props={}

const navegationMain = (props:Props) => {
    return (
        <Routes>
            <Route index path={'/'} element={<Main />} />
            <Route path={ROUTES.VIEW_TASK} element={<Task />} />
            <Route path={'/'}  />
        </Routes>
    )
}

export default navegationMain
