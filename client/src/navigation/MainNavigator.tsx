import Index from "@scenes/index";
import Profiles from "@scenes/profiles/profiles";
import Config from "@scenes/configure/config";
import { ROUTES } from "@utils/ROUTES";
import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "@scenes/main/main";

const MainNavigator = memo(() => {
  return (
    <Routes>
      <Route index path={ROUTES.INDEX} element={<Index />} />
      <Route path={ROUTES.MAIN} element={<Main/>} />
      <Route path={ROUTES.SELECT_PROFILE} element={<Profiles />} />
      <Route path={ROUTES.CONFIG} element={<Config />}/>

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
});

export default MainNavigator;
