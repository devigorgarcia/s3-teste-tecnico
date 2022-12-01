import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
    </Routes>
  );
};
