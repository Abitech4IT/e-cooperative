import { Box, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

function Main({ drawerWidth }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: "100vh",
        bgcolor: "#f3f4f6",
      }}
    >
      <Toolbar />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
}

export default Main;
