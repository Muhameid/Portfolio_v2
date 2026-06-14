import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/sections/Hero";
import { Presentation } from "./components/sections/Presentation";
import { Formations, Experiences } from "./components/sections/Timeline";
import { Projets } from "./components/sections/Projets";
import { Stack } from "./components/sections/Stack";
import { Portfolio } from "./components/sections/Portfolio";
import { Temoignage, Certifications } from "./components/sections/Misc";
import { Contact } from "./components/sections/Contact";

const Home = () => (
  <div className="App bg-ink-950 text-neutral-100 min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <Presentation />
      <Formations />
      <Experiences />
      <Projets />
      <Stack />
      <Portfolio />
      <Temoignage />
      <Certifications />
      <Contact />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
