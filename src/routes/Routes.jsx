import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";
import Home from "../pages/Home.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import ForgetPassword from "../pages/ForgetPassword.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/profile" element={<Home />} />
      <Route path="/ChatBot" element={<Home />} />
      <Route path="/simulate" element={<Home />} />
      <Route path="/Results/:id" element={<Home />} />
      <Route path="/course/:id" element={<Home />} />
      <Route path="/password" element={<Home />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  );
};

export default Routers;
