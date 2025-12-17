import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Internships from "./pages/Internships";
import Applications from "./pages/Applications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
