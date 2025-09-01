import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OrderDetails from "./pages/OrderDetails";
import Layout from "./component/layout/Layout";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";
import SignIn from "./pages/signIn/SignIn";
import Orders from "./pages/order/Orders";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<SignIn />} />

          <Route element={<ProtectedRoute roles={["deliveryperson"]} />}>
            <Route element={<Layout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/order/:id" element={<OrderDetails />} />
              <Route path="/orders/:status" element={<Orders />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
