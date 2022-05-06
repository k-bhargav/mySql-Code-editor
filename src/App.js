import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Address from "./pages/Address/Address";
import DebitCard from "./pages/DebitCard/DebitCard";
import UPI from "./pages/UPI/UPI";
import NewAddress from "./pages/New/NewAddress";
import NewDebitCard from "./pages/New/NewDebitCard";
import NewUPI from "./pages/New/NewUPI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="address">
            <Route index element={<Address />} />
          </Route>
          <Route path="newAdress" element={<NewAddress />} />
          <Route path="debitCard">
            <Route index element={<DebitCard />} />
          </Route>
          <Route path="newDebitCard" element={<NewDebitCard />} />
          <Route path="upi">
            <Route index element={<UPI />} />
          </Route>
          <Route path="newUPI" element={<NewUPI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
