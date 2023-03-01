import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Work from "./components/Content/Work";
import About from "./components/About";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;