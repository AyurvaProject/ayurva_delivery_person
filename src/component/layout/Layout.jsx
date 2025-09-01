import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import DescriptionIcon from "@mui/icons-material/Description";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { useAuth } from "../../context/AuthContext";
import { GetCurrentUser } from "../../apis/auth/Auth";
// import logo from "../../assets/img/logo.png";

const Layout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [bottomNavValue, setBottomNavValue] = useState(0);

  // Fetch current user
  const getUser = async () => {
    const user = await GetCurrentUser();
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  // Define bottom navigation items
  const navItems = [
    { label: "Pending Orders", icon: <HomeIcon />, path: "/orders/all" },
    { label: "My PendingOrders", icon: <ListIcon />, path: "/orders/pending" },
    {
      label: "Completed Orders",
      icon: <DescriptionIcon />,
      path: "/orders/completed",
    },
  ];

  const handleNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
    navigate(navItems[newValue].path);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src="/logo.png" alt="Logo" sx={{ width: 40, height: 40 }} />
            <Typography variant="h6" color="black" fontWeight={600}>
              Ayurva
            </Typography>
          </Box>
          <Button
            color="primary"
            variant="contained"
            endIcon={<LogoutIcon />}
            onClick={() => logout()}
            sx={{ textTransform: "none" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 10, // To account for AppBar height
          pb: 7, // To account for BottomNavigation height
          px: 2,
          width: "100%",
        }}
      >
        <Outlet />
      </Box>

      {/* Bottom Navigation */}
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          overflow: "hidden",
          boxShadow: 4,
        }}
        elevation={3}
      >
        <BottomNavigation value={bottomNavValue} onChange={handleNavChange}>
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Layout;
