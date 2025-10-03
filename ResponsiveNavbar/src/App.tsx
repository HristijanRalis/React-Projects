import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Content } from "./components/Content";
import { AboutUs } from "./components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
