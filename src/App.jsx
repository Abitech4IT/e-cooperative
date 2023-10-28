import { ThemeProvider } from "@mui/material/styles";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import CreateNewMember from "./pages/CreateNewMember";
import Savings from "./pages/Savings";
import LoanRequest from "./pages/LoanRequest";
import { theme } from "./utils/AppTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/member-list" element={<Members />} />
            <Route path="/new-member" element={<CreateNewMember />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/loan" element={<LoanRequest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
