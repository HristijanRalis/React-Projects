import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { TeamMembers } from "./components/TeamMembers";
import { Help } from "./components/Help";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/aboutUs" element={<AboutUs />}>
          <Route path="members/:memberId" element={<TeamMembers />} />
        </Route>

        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
