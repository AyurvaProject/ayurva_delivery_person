import { useState, useEffect } from "react";
import OrderCard from "../../component/order/OrderCard";
import {
  GetCompletedOrdersByDeliveryPersonId,
  GetPendingOrders,
  GetPendingOrdersByDeliveryPersonId,
} from "../../apis/order/Order";
import { Box } from "@mui/material";

const OrderListSection = ({ status }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "pending") {
      GetPendingOrdersByDeliveryPersonId().then((res) => setOrders(res));
    } else if (status === "completed") {
      GetCompletedOrdersByDeliveryPersonId().then((res) => setOrders(res));
    } else {
      GetPendingOrders().then((res) => setOrders(res));
    }
    setLoading(false);
  }, [status]);

  if (loading) return <div>Loading...</div>;
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {orders.map((order) => (
        <OrderCard key={order.order_id} order={order} />
      ))}
    </Box>
  );
};

export default OrderListSection;
