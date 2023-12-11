import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./assets/views/HomePage";
import { BlogPage } from "./assets/views/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
