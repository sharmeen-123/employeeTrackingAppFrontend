import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../public/components/dashboard";
import ManageUser from "../public/components/manageUser";
import PaymentAndBilling from "../public/components/PaymentAndBilling";
// import { MapCard } from "../public/components/mapCard";
import AddUserform from "../public/components/addUserform";
import Adduser from "../public/components/Adduser";
import UpdateUserform from "../public/components/updateUserform";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/user" element={<ManageUser />} />
          <Route exact path="/user/addUser" element={<Adduser/>} />
          <Route
            exact
            path="/bill"
            element={<PaymentAndBilling />}
          />
        </Routes>
      </div>
    </Router>
    // <UpdateUserform/>
  );
}

export default App;
