import Index from "@scenes/index";
import { ROUTES } from "@utils/ROUTES";
import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "@scenes/main/main";

const MainNavigator = memo(() => {
  return (
    <Routes>
      <Route index path={ROUTES.INDEX} element={<Index />} />
      <Route path={ROUTES.MAIN} element={<Main/>} />
      <Route path={ROUTES.SELECT_PROFILE} element={<div>analytics</div>} />
      {/* <Route path={ROUTES.Config} element={<div>config</div>} /> */}

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
});

export default MainNavigator;
