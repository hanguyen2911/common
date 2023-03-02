import React from "react";
import logo from "./logo.svg";
import Home from "./components/screens/Homepage";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout";

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
