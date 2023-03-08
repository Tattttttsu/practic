import React from 'react';
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import {GlobalStyles} from "./styles/GlobalStyles";
import "normalize.css";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          <GlobalStyles/>
      </ThemeProvider>
  );
}

export default App;
