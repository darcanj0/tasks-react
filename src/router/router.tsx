import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { SignPage } from "../pages/Login";
import { AppPaths } from "../types/app.paths";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppPaths.SIGN} element={<SignPage />} />
        <Route path={AppPaths.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
