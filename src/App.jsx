// App.js

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Dashboard from "./screens/dashboard.jsx";
import NotFound from "./screens/error/notfound.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
