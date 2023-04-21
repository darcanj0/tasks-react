import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { SignUpPage as SignUpPage } from "../pages/SignUp";
import { AppPaths } from "../types/app.paths";
import { SingInPage } from "../pages/SignIn";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppPaths.SIGNUP} element={<SignUpPage />} />
        <Route path={AppPaths.SIGNIN} element={<SingInPage />} />
        <Route path={AppPaths.HOME} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
