import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import OrderDetails from "./pages/OrderDetails";
import Layout from "./component/layout/Layout";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";
import SignIn from "./pages/signIn/SignIn";
import Orders from "./pages/order/Orders";
import AllReqOrders from "./pages/order/AllReqOrders";
import AllPendingOrders from "./pages/order/AllPendingOrders";
import AllCompletedOrders from "./pages/order/AllCompletedOrders";
import ReqInsideOrder from "./pages/order/ReqInsideOrder";
import PendingInsideOrder from "./pages/order/PendingInsideOrder";
import CompletedInsideOrder from "./pages/order/CompletedInsideOrder";
import AllReqPrOrders from "./pages/order/AllReqPrOrders";
import AllPendingPrOrders from "./pages/order/AllPendingPrOrders";
import AllCompletedPrOrders from "./pages/order/AllCompletedPrOrders";
import ReqInsidePrOrder from "./pages/order/ReqInsidePrOrder";
import PendingInsidePrOrder from "./pages/order/PendingInsidePrOrder";
import CompletedInsidePrOrder from "./pages/order/CompletedInsidePrOrder";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<SignIn />} />

          <Route element={<ProtectedRoute roles={["deliveryperson"]} />}>
            <Route element={<Layout />}>
              <Route path="/" element={<AllReqOrders />} />
              <Route path="/req-orders" element={<AllReqOrders />} />
              <Route path="/pending-orders" element={<AllPendingOrders />} />
              <Route
                path="/completed-orders"
                element={<AllCompletedOrders />}
              />
              <Route path="/order/:id" element={<OrderDetails />} />
              <Route path="/orders/:status" element={<Orders />} />
              <Route
                path="/req-orders-inside/:addressId"
                element={<ReqInsideOrder />}
              />
              <Route
                path="/pending-orders-inside/:addressId"
                element={<PendingInsideOrder />}
              />
              <Route
                path="/completed-orders-inside/:addressId"
                element={<CompletedInsideOrder />}
              />

              <Route path="/req-pr-orders" element={<AllReqPrOrders />} />
              <Route
                path="/pending-pr-orders"
                element={<AllPendingPrOrders />}
              />
              <Route
                path="/completed-pr-orders"
                element={<AllCompletedPrOrders />}
              />
              <Route
                path="/req-pr-orders-inside/:addressId"
                element={<ReqInsidePrOrder />}
              />
              <Route
                path="/pending-pr-orders-inside/:addressId"
                element={<PendingInsidePrOrder />}
              />
              <Route
                path="/completed-pr-orders-inside/:addressId"
                element={<CompletedInsidePrOrder />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
