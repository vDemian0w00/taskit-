import Index from "@scenes/index";
import Profiles from "@scenes/profiles/profiles";
import ROUTES from "@utils/ROUTES";
import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "@scenes/main/main";
import NavMain from '@navigation/navegationMain'

const MainNavigator = memo(() => {
  return (
    <Routes>
      <Route index path={ROUTES.INDEX} element={<Index />} />
      <Route path={`${ROUTES.MAIN}/*`} element={<NavMain />} />
      <Route path={ROUTES.SELECT_PROFILE} element={<Profiles />} />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
});

export default MainNavigator;
