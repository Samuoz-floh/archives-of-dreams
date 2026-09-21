import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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

/* =========================================================
   SCROLL TO TOP / HASH TARGET
========================================================= */

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");

      const scrollToSection = () => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "auto",
          });
        }
      };

      // Allow the new page/section to render before scrolling.
      const timer = setTimeout(scrollToSection, 50);

      return () => clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname, hash]);

  return null;
}

/* =========================================================
   HOMEPAGE
========================================================= */

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

/* =========================================================
   APP
========================================================= */

function App() {
  const isGitHubPages =
    window.location.hostname.endsWith("github.io");

  const basename = isGitHubPages
    ? "/archives-of-dreams"
    : "/";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />

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