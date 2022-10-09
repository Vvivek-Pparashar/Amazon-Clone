import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Home from "./Components/Home";
import CheckOut from "./Components/CheckOut";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <CheckOut />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
