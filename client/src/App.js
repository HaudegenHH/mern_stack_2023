import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import { useMemo } from "react";
import { useSelector } from "react-redux";

import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";

import Layout from 'scenes/layout';

function App() {
  // useSelector - react redux hook
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); 

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
	    <Route element={<Layout />}>
	     <Route path="/" element={<Navigate to="/dashboard" replace />} />
             <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
Each call to "useSelector" creates an individual subscription to 
the Redux store. It takes in a function argument that returns 
the part of the state that you want.

The React "useMemo" hook returns a memoized value.
Think of memoization as caching a value so that it does not need 
to be recalculated.
The useMemo hook only runs when one of its dependencies updates, which
can improve performance.
*/