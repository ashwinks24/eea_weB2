import "./App.css";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Team from "./pages/Team.jsx";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import Footer from "./components/Footer.jsx";
import ModernLoader from "./components/ModernLoader.jsx";
import Academics from "./pages/Academics.jsx";
import Faculty from "./pages/Faculty.jsx";
import Labs from "./pages/Labs.jsx";
import Project from "./pages/Project.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ModernLoader>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/teams" element={<Team />} />
              <Route path="/EEA" element={<Home/>} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/Faculty" element={<Faculty/>} />
              <Route path="/Labs" element={<Labs/>}/>
              <Route path="/projects" element={<Project/>}/>

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ModernLoader>
  );
}

export default App;
