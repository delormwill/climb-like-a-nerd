import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";
import Record from "./components/Record";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="session">
          <Route path="bouldering" element={<Record type="bouldering" />} />
          {/* <Route path="sport" element={<NewSession />} /> */}
          {/* <Route path="trad" element={<NewSession />} /> */}
          {/* <Route path="toprope" element={<NewSession />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
