import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
const RouterFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouterFile;
