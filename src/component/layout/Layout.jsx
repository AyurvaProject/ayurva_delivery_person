import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import DescriptionIcon from "@mui/icons-material/Description";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { useAuth } from "../../context/AuthContext";
import { GetCurrentUser } from "../../apis/auth/Auth";

const Layout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({});
  const [bottomNavValue, setBottomNavValue] = useState(0);
  const isMobile = useMediaQuery("(max-width:900px)");

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
    { label: "Pending Orders", icon: <HomeIcon />, path: "/req-orders" },
    { label: "My Pending Orders", icon: <ListIcon />, path: "/pending-orders" },
    {
      label: "Completed Orders",
      icon: <DescriptionIcon />,
      path: "/completed-orders",
    },
    {
      label: "Pending Presc. Orders",
      icon: <VaccinesIcon />,
      path: "/req-pr-orders",
    },
    {
      label: "My Pending Presc. Orders",
      icon: <HealthAndSafetyIcon />,
      path: "/pending-pr-orders",
    },
    {
      label: "Completed Presc. Orders",
      icon: <DescriptionIcon />,
      path: "/completed-pr-orders",
    },
  ];

  // Update bottom navigation based on current URL
  useEffect(() => {
    const index = navItems.findIndex((item) => location.pathname === item.path);
    if (index !== -1) {
      setBottomNavValue(index);
    }
  }, [location.pathname]);

  const handleNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
    navigate(navItems[newValue].path);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "100vw",
        overflowX: "hidden",
        bgcolor: "#f8f9fc",
        p: 1,
      }}
    >
      {/* Header */}
      <AppBar
        position="fixed"
        elevation={3}
        sx={{
          backgroundColor: "#ffffff",
          color: "#2c3e50",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          px: 2,
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: 70,
          }}
        >
          {/* Left Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar
              src="/logo.png"
              alt="Logo"
              sx={{
                width: 42,
                height: 42,
                border: "2px solid #1976d2",
                bgcolor: "#e3f2fd",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: 0.5,
                color: "#1976d2",
              }}
            >
              Ayurva
            </Typography>
          </Box>

          {/* Logout Button */}
          <Button
            variant="contained"
            onClick={() => logout()}
            endIcon={<LogoutIcon />}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 2,
              fontWeight: 600,
              fontSize: isMobile ? "0.75rem" : "0.875rem",
              bgcolor: "#1976d2",
              "&:hover": { bgcolor: "#1565c0" },
            }}
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
          pt: 11, // space for AppBar
          pb: 9, // space for BottomNavigation
          px: { xs: 1.5, sm: 2, md: 3 },
          maxWidth: "100vw",
          minHeight: "calc(100vh - 120px)",
        }}
      >
        <Outlet />
      </Box>

      {/* Bottom Navigation */}
      <Paper
        elevation={3}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: "100vw",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
          bgcolor: "#ffffff",
          overflow: "hidden",
        }}
      >
        <BottomNavigation
          value={bottomNavValue}
          onChange={handleNavChange}
          showLabels
          sx={{
            "& .Mui-selected": {
              color: "#1976d2",
              fontWeight: 600,
            },
          }}
        >
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.label}
              label={item.label}
              icon={item.icon}
              sx={{
                minWidth: { xs: 60, sm: 80 },
                "& .MuiBottomNavigationAction-label": {
                  fontSize: "0.7rem",
                },
                color: "#555",
              }}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Layout;
