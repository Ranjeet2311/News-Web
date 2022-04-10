import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import UsNews from "./components/pages/UsNews";
import EuNews from "./components/pages/EuNews";
import Serach from "./components/pages/Search";
import AsiaNews from "./components/pages/AsiaNews";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="us" element={<UsNews />} />
            <Route path="eu" element={<EuNews />} />
            <Route path="as" element={<AsiaNews />} />
            <Route path="as" element={<AsiaNews />} />
            <Route path="serach" element={<Serach />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
