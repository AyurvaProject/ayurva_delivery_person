import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OrderDetails from "./pages/OrderDetails";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
