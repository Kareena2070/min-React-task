import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Subject from "./pages/Subject";

export default function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/details">Details</Link>
          <Link to="/subject">Subject</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/subject" element={<Subject />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}
