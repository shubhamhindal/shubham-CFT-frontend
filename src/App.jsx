import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from "./Pages/Home";
import Feedback from "./Pages/Feedback";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
