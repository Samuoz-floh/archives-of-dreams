import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Donation from "./components/Donation";
import Contact from "./components/Contact";

import Admissions from "./pages/Admissions.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProgramsPage from "./pages/ProgramsPage.jsx";
import DonatePage from "./pages/DonatePage.jsx";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Donation />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;