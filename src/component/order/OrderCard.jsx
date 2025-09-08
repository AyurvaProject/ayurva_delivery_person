import { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Box,
  Typography,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import {
  AssignOrderToDeliveryPerson,
  ChangeOrderDeliveryStatus,
} from "../../apis/order/Order";
import { GetCurrentUser } from "../../apis/auth/Auth";

const OrderCard = ({ order }) => {
  const [assigning, setAssigning] = useState(false);
  const [completing, setCompleting] = useState(false);

  const assignOrder = async () => {
    setAssigning(true);
    await AssignOrderToDeliveryPerson(order.order_id);
    setAssigning(false);
  };

  const completeOrder = async () => {
    setCompleting(true);
    await ChangeOrderDeliveryStatus(order.order_id, "completed");
    setCompleting(false);
  };

  return (
    <Card sx={{ p: 2, boxShadow: 3 }} key={order.order_id}>
      <CardContent>
        <Typography variant="h5">
          Product: {order.product.product_name}
        </Typography>
        <Typography variant="body1">
          Destination Address: {order.address.address_l1}{" "}
          {order.address.address_l2} {order.address.address_l3}
        </Typography>
        <Typography variant="body1">
          Pharmacy Contact: {order.pharmacist.pharmacist_contact_no}
        </Typography>
        <Typography variant="body1">
          Pharmacist Name: {order.pharmacist.pharmacist_name}
        </Typography>
        <Typography variant="body1">
          Reciever: {order.user.user_name}
        </Typography>
        <Typography variant="body1">
          Reciever Contact: {order.user.user_contact}
        </Typography>

        <Chip
          label={
            order.order_delivery_status == "pending" ? "Pending" : "In Progress"
          }
          color={order.order_delivery_status == "pending" ? "warning" : "info"}
          sx={{ mt: 2 }}
        />
      </CardContent>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={assignOrder}
          disabled={assigning || !!order.delivery_person_id}
        >
          Accept
        </Button>
        <Button
          variant="contained"
          color="success"
          disabled={
            order.delivery_person_id != GetCurrentUser().id || completing
          }
          onClick={completeOrder}
        >
          Finish
        </Button>
      </Stack>
    </Card>
  );
};

export default OrderCard;
