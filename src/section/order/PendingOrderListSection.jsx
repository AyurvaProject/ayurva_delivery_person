import {
  GetOrdersGroupByAddress,
  GetPendingOrdersGroupByAddress,
} from "../../apis/order/Order";
import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Grid } from "@mui/material";
import AddressOrderCard from "../../component/order/AddressOrderCard";

const PendingOrderListSection = () => {
  const [loading, setLoading] = useState(true);
  const [ordersByAddress, setOrdersByAddress] = useState([]);

  const fetchOrdersByAddress = async () => {
    setLoading(true);
    const data = await GetPendingOrdersGroupByAddress();
    setOrdersByAddress(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrdersByAddress();
  }, []);

  if (loading) {
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
  }

  if (ordersByAddress.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6">No orders found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{}}>
      <Grid container spacing={3}>
        {ordersByAddress.map((orderGroup) => (
          <Grid item xs={12} sm={6} md={4} key={orderGroup.address.address_id}>
            <AddressOrderCard order={orderGroup} status="pending" type="npr" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PendingOrderListSection;
