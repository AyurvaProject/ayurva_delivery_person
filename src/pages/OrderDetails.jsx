import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const orders = [
  {
    id: 1,
    destination: "Colombo",
    weight: "2kg",
    owner: "John Doe",
    details: "Deliver within 2 hours",
  },
  {
    id: 2,
    destination: "Kandy",
    weight: "1.5kg",
    owner: "Alice Smith",
    details: "Handle with care",
  },
  {
    id: 3,
    destination: "Galle",
    weight: "3kg",
    owner: "Bob Johnson",
    details: "Urgent delivery",
  },
];

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = orders.find((o) => o.id === parseInt(id));

  if (!order) {
    return <Typography variant="h5">Order not found!</Typography>;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ maxWidth: 500, p: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5">Order Details</Typography>
          <Typography variant="h6">Destination: {order.destination}</Typography>
          <Typography variant="body1">Weight: {order.weight}</Typography>
          <Typography variant="body2">Owner: {order.owner}</Typography>
          <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
            {order.details}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button variant="contained" color="success" fullWidth>
              Accept
            </Button>
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={() => navigate("/")}
            >
              Reject
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrderDetails;
