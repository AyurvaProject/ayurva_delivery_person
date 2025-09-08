import React from "react";
import { Container, Box } from "@mui/material";
import AppBarComponent from "./AppBar";

const Layout = ({ children }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBarComponent />
      <Container sx={{ mt: 3 }}>{children}</Container>
    </Box>
  );
};

export default Layout;
