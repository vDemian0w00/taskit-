import React from 'react'
import { Main } from '@scenes/main/main'

import PostedTasks from '@scenes/task/postTask'
import AcceptedTask from '@scenes/task/acceptedTask'
import PendingTask from '@scenes/task/pendingTask'
import ViewExpert from '@scenes/task/seeExp'

import ROUTES  from '@utils/ROUTES/index'
import { Route, Routes } from "react-router-dom";

type Props={}

const navegationMain = (props:Props) => {
    return (
        <Routes>
            <Route index path={'/'} element={<Main />} />

            <Route path={ROUTES.POSTED_TASK} element={<PostedTasks />} />
            <Route path={ROUTES.ACCEPTED_TASK} element={<AcceptedTask />} />
            <Route path={ROUTES.PENDING_TASK} element={<PendingTask />} />

            <Route path={ROUTES.VIEW_EXPERT} element={<ViewExpert />} />
        </Routes>
    )
}

export default navegationMain
