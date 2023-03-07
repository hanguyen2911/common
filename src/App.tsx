import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout";
import "../src/assets/styles/app.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </div>
  );
}

export default App;
