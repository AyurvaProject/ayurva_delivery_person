import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Divider,
  Stack,
} from "@mui/material";
import { GetPharmacyByPharmacistId } from "../../apis/pharmacy/Pharmacy";
import {
  AssignOrderToDeliveryPerson,
  ChangeOrderDeliveryStatus,
  AssignPrOrderToDeliveryPerson,
  ChangePrOrderDeliveryStatus,
} from "../../apis/order/Order";
import { GetCurrentUser } from "../../apis/auth/Auth";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CustomSnackbar from "../snackbar/CustomSnackbar";

const SingleOrderCard = ({ order, type }) => {
  const [pharmacy, setPharmacy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [assigning, setAsssigning] = useState(false);
  const [changingStatus, setChangingStatus] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
    loading: false,
  });
  const showSnackbar = (severity, loading = false, message) => {
    setSnackbar({
      open: true,
      message: loading ? "Processing..." : message,
      severity,
      loading,
    });

    if (!loading) {
      setTimeout(() => setSnackbar({ ...snackbar, open: false }), 3000);
    }
  };

  useEffect(() => {
    const fetchPharmacy = async () => {
      setLoading(true);
      const data = await GetPharmacyByPharmacistId(order.pharmacist_id);
      setPharmacy(data);
      setLoading(false);
    };
    fetchPharmacy();
  }, [order]);

  const handleAssignOrder = async (id) => {
    setAsssigning(true);
    try {
      if (type === "pr") {
        await AssignPrOrderToDeliveryPerson(id);
      } else {
        await AssignOrderToDeliveryPerson(id);
      }
      showSnackbar("success", false, "Order Assigned Successfully!");
    } catch (error) {
      showSnackbar("error", false, error.response.data.message);
    } finally {
      setAsssigning(false);
    }
  };

  const handleCompleteOrder = async (id) => {
    setChangingStatus(true);
    try {
      if (type === "pr") {
        await ChangePrOrderDeliveryStatus(id, "completed");
      } else {
        await ChangeOrderDeliveryStatus(id, "completed");
      }
      showSnackbar("success", false, "Order Completed Successfully!");
    } catch (error) {
      showSnackbar("error", false, error.response.data.message);
    } finally {
      setChangingStatus(false);
    }
  };
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
        <Typography variant="h6" color="primary" fontWeight={"bold"}>
          Order ID: #{order.order_id}
        </Typography>
        {loading ? (
          <Typography variant="body2" color="text.primary">
            Loading...
          </Typography>
        ) : (
          <>
            <Typography variant="body2" color="text.primary">
              From {pharmacy.pharmacy_name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {pharmacy.pharmacy_contact_01}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {pharmacy.pharmacy_address_l1}, {pharmacy.pharmacy_address_l2},
              {pharmacy.pharmacy_address_l3}
            </Typography>
          </>
        )}

        <Divider sx={{ my: 1 }} />

        <Typography variant="body2" color="text.primary">
          To {order.user.user_name}
        </Typography>

        <Typography variant="body2" color="text.primary">
          {order.address.address_l1}, {order.address.address_l2},
          {order.address.address_l3}
        </Typography>

        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
          Contact: {order.user.user_contact}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <Chip
            size="small"
            variant="outlined"
            label={order.order_pharmacy_status}
            color={
              order.order_pharmacy_status == "completed" ? "success" : "warning"
            }
            sx={{ textTransform: "uppercase", p: 1 }}
            icon={<LocalHospitalIcon />}
          />
          <Chip
            size="small"
            variant="outlined"
            label={order.order_delivery_status}
            color={
              order.order_delivery_status == "completed" ? "success" : "warning"
            }
            sx={{ textTransform: "uppercase", p: 1 }}
            icon={<LocalShippingIcon />}
          />
        </Stack>

        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{
            mt: 2,
            textTransform: "none",
            borderRadius: "10px",
          }}
          disabled={
            order.order_delivery_status != "pending" ||
            order.delivery_person_id ||
            assigning
          }
          onClick={() => {
            handleAssignOrder(order.order_id);
          }}
        >
          {assigning ? "Accepting..." : "Accept"}
        </Button>
        <Button
          variant="contained"
          color="success"
          size="small"
          sx={{
            mt: 1,
            textTransform: "none",
            borderRadius: "10px",
          }}
          disabled={
            order.order_delivery_status != "pending" ||
            !order.delivery_person_id ||
            order.delivery_person_id != GetCurrentUser()?.id ||
            changingStatus
          }
          onClick={() => {
            handleCompleteOrder(order.order_id);
          }}
        >
          {changingStatus ? "Completing..." : "Complete Order"}
        </Button>
      </CardContent>
      <CustomSnackbar
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
        severity={snackbar.severity}
        loading={snackbar.loading}
      />
    </Card>
  );
};

export default SingleOrderCard;
