import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import AuthLayout from "@layouts/AuthLayout";
import Dashboard from "@pages/Dashboard";
import AuthPage from "@pages/Auth/Index";
import ProtectedRoute from "@routes/ProtectedRoute";
import NewCustomer from "@pages/Lookups/NewCustomer/Index";
import NewCustomerCreate from "@pages/Lookups/NewCustomer/Create";
import ExistingCustomer from "@pages/Lookups/ExistingCustomer/Index";
import ExistCustomerCreate from "@pages/Lookups/ExistingCustomer/Create";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<AuthPage />} />
          </Route>

          {/* Protected routes - require authentication */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />

              <Route path="/lookup">
                <Route path="new" element={<NewCustomer />} />
                <Route path="new/create" element={<NewCustomerCreate />} />
                <Route path="existing" element={<ExistingCustomer />} />
                <Route
                  path="existing/create"
                  element={<ExistCustomerCreate />}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
