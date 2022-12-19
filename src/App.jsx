import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Countries from "./pages/Countries";
import Country from "./pages/Country";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<Country />} />
      </Routes>
    </>
  );
}
