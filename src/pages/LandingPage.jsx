import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

const orders = [
  { id: 1, destination: "Colombo", weight: "2kg", owner: "John Doe" },
  { id: 2, destination: "Kandy", weight: "1.5kg", owner: "Alice Smith" },
  { id: 3, destination: "Galle", weight: "3kg", owner: "Bob Johnson" },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {orders.map((order) => (
        <Grid item xs={12} sm={6} md={4} key={order.id}>
          <Card
            sx={{ cursor: "pointer", boxShadow: 3 }}
            onClick={() => navigate(`/order/${order.id}`)}
          >
            <CardContent>
              <Typography variant="h6">
                Destination: {order.destination}
              </Typography>
              <Typography variant="body1">Weight: {order.weight}</Typography>
              <Typography variant="body2">Owner: {order.owner}</Typography>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/order/${order.id}`);
                }}
              >
                View Order
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LandingPage;
