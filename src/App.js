import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/home/Dashboard";
import Player from "./data/setPlayer";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="sidenav">
        <Sidebar />
        <div className="container">
          <div className="row">
            <div className="col">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
