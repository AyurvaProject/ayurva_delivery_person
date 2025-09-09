import { useState, useEffect } from "react";
import SingleOrderCard from "../../component/order/SingleOrderCard";
import { GetCurrentUser } from "../../apis/auth/Auth";
import {
  GetReqPrOrdersByAddressId,
  GetPendingPrOrdersByAddressIdForDelivery,
  GetCompletedPrOrdersByAddressIdForDelivery,
} from "../../apis/order/Order";
import { Box, Typography, CircularProgress, Grid } from "@mui/material";

const InsidePrOrderListSection = ({ addressId, status = "all" }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "all") {
      GetReqPrOrdersByAddressId(addressId).then((res) => setOrders(res));
    } else if (status === "pending") {
      GetPendingPrOrdersByAddressIdForDelivery(
        addressId,
        GetCurrentUser()?.id
      ).then((res) => setOrders(res));
    } else {
      GetCompletedPrOrdersByAddressIdForDelivery(
        addressId,
        GetCurrentUser()?.id
      ).then((res) => setOrders(res));
    }
    setLoading(false);
  }, [status, addressId]);

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  return (
    <Box sx={{}}>
      <Grid container spacing={3}>
        {orders.map((orderGroup) => (
          <Grid item xs={12} sm={6} md={4} key={orderGroup.order_id}>
            <SingleOrderCard order={orderGroup} type="pr" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InsidePrOrderListSection;
