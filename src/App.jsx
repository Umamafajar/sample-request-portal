import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequestSample from "./RequestSample";
import AdminSample from "./AdminSample";


function App() {
  return( 
    <Router>
      <Routes>
        <Route path="/request-sample" element={<RequestSample />} />
        <Route path="/" element={<AdminSample />} />
      </Routes>
    </Router>
  );
}

  export default App;