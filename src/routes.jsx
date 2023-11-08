import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { LoginPage } from "./pages/login/LoginPage";
import { UnfoundPage } from "./pages/unfound/UnfoundPage";
import { RegistrationPage } from "./pages/registration/RegistrationPage";
import { FavoritesPage } from "./pages/favorites/FavoritesPage";
import { CategoryPage } from "./pages/category/CategoryPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="*" element={<UnfoundPage />} />
    </Routes>
  );
};
