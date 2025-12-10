import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"; // Our new layout wrapper

// Import the main page components
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; // Good practice to include a 404 page

function App() {
  return (
    // 1. BrowserRouter is the main wrapper for routing
    <Router>
      {/* 2. Routes are defined inside the Layout component to ensure 
             the Header and Footer are always visible */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {" "}
              <Home />{" "}
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              {" "}
              <About />{" "}
            </Layout>
          }
        />
        <Route
          path="/projects"
          element={
            <Layout>
              {" "}
              <Projects />{" "}
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              {" "}
              <Contact />{" "}
            </Layout>
          }
        />

        {/* Catch-all route for 404 Not Found pages */}
        <Route
          path="*"
          element={
            <Layout>
              {" "}
              <NotFound />{" "}
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
