import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import "./index.css";
import Rules from "./screens/rules";
import WaitList from "./screens/Waitlist";
import Contact from "./screens/Contact";
import Terms from "./screens/Terms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/" || ""} element={<Home />} />
        <Route path="club-rules" element={<Rules />} />
        <Route path="waitlist" element={<WaitList />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
