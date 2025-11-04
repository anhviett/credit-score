import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@ant-design/v5-patch-for-react-19';
import './App.css';
import 'antd/dist/reset.css';
import './index.css';
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/Auth/Index";
import ProtectedRoute from "./routes/ProtectedRoute";
import NewCustomer from "./pages/Lookup/NewCustomer/Index";
import NewCustomerCreate from "./pages/Lookup/NewCustomer/Create";
import ExistingCustomer from "./pages/Lookup/ExistingCustomer/Index";
import ExistCustomerCreate from "./pages/Lookup/ExistingCustomer/Create";

function App() {
  return (
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
              <Route path="existing/create" element={<ExistCustomerCreate />} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
