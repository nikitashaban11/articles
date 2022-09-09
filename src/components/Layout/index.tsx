import { PropsWithChildren } from "react";
import { Box, Container } from "@mui/material";

import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Header />
      <Container
        maxWidth="sm"
        sx={{
          height: "calc(100% - 64px)",
          padding: "10px 0",
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
