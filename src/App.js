import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/home/Dashboard";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
