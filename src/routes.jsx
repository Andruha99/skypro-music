import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { LoginPage } from "./pages/login/LoginPage";
import { UnfoundPage } from "./pages/unfound/UnfoundPage";
import { RegistrationPage } from "./pages/registration/RegistrationPage";
import { FavoritesPage } from "./pages/favorites/FavoritesPage";
import { CategoryPage } from "./pages/category/CategoryPage";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";

export const AppRoutes = (props) => {
  // let isAllow = false;

  // if (localStorage.getItem("user")) {
  //   isAllow = true;
  // } else {
  //   isAllow = false;
  // }

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={props.isAllow} />}>
        <Route path="/" element={<MainPage />} />
        <Route
          setIsAllow={props.setIsAllow}
          path="/favorites"
          element={<FavoritesPage />}
        />
        <Route
          setIsAllow={props.setIsAllow}
          path="/category/:id"
          element={<CategoryPage />}
        />
      </Route>
      <Route
        path="/login"
        element={
          <LoginPage
            handleEnter={props.handleEnter}
            setIsAllow={props.setIsAllow}
            isAllow={props.isAllow}
          />
        }
      />
      <Route
        path="/register"
        element={
          <RegistrationPage
            handleEnter={props.handleEnter}
            setIsAllow={props.setIsAllow}
          />
        }
      />
      <Route path="*" element={<UnfoundPage />} />
    </Routes>
  );
};
