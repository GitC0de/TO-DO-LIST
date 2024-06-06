import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Schedule from "./components/Schedule";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:date" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;