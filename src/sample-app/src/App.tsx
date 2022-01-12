import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import "./App.css";

// const Home = React.lazy(() => import("./routes/Home"));
// const Dashboard = React.lazy(() => import("./routes/Dashboard"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
