import './App.css';
import Login from "./components/Login";
import Home from "./components/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
          <Route
            exact
            path="/login"
            element={<Login />}
          />
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
              path="*"
              element={<Navigate to="/" />}
                    />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
