import React from "react";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contacts";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
