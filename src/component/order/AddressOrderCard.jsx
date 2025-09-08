import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Divider,
} from "@mui/material";

const AddressOrderCard = ({ order }) => {
  return (
    <Card
      sx={{
        //   backgroundColor: "",
        borderRadius: "20px",
        textAlign: "left",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
        },
      }}
      // onClick={() => (window.location.href = role.path)}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        {/* <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {role.icon}
                  </Box> */}
        <Typography variant="h6" fontWeight="bold" color="primary">
          To {order.orders[0].user.user_name}
        </Typography>

        <Divider sx={{ my: 1 }} />

        <Typography variant="body2" color="text.primary">
          {order.address.address_l1}, {order.address.address_l2},
          {order.address.address_l3}
        </Typography>

        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
          {order.orders.length} Orders
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{
            mt: 2,
            textTransform: "none",
            borderRadius: "10px",
          }}
        >
          See Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddressOrderCard;
