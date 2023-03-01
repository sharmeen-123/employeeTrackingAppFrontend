import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../public/components/dashboard";
import ManageUser from "../public/components/manageUser";
import PaymentAndBilling from "../public/components/PaymentAndBilling";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/user" element={<ManageUser />} />
          <Route
            exact
            path="/bill"
            element={<PaymentAndBilling />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
