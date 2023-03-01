import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Work from "./components/Content/Work";
import About from "./components/About";

function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <Routes>
        <Route path="/" exact element={<Work />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;