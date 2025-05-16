import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Error from "./pages/Error";


import AdminPannel from "./AdminSection/AdminPannel";
import Home from "./pages/Home/Home";
import Profile from "./pages/UserProfile/Profile";
import PlacedOrder from "./pages/PlaceOrder/PlaceOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/userProfile" element={<Profile />} />
        <Route path="/placeOrder" element={<PlacedOrder />} />

        <Route path="/adminPannel" element={<AdminPannel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
