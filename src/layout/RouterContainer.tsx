import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home2 from "../pages/Home2";

export default function RouterContainer() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
