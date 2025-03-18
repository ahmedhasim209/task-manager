import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Tasks from "./Pages/Tasks";
import Files from "./Pages/Files";
import Messages from "./Pages/Messages";
import Timeline from "./Pages/Timeline";
import Settings from "./Pages/Settings";

function App() {
  return (
    <Router>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <div className="main-content float-right w-[94%]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/files" element={<Files />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
