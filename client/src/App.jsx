import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;