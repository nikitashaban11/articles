import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import { globalStyle } from "./globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <GlobalStyles styles={globalStyle} />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
