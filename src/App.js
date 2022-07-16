import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GithubProvider } from "./context/Github/GithubContext";
import { AlertProvider } from "./context/Alert/AlertContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./components/User";
import NotFound from "./pages/NotFound";
import Alert from "./components/Alert";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <Navbar />

          <main className="container p-10">
            <Alert />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<User />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
