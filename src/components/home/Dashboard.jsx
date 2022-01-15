import React from "react";
import EloChart from "./charts/EloChart";
import WhiteWinrate from "./charts/WhiteWinrate";
import BlackWinrate from "./charts/BlackWinrate";
import SearchUser from "./SearchUser";
import getStats from "../../data/getStats";
import "./dashboard.css";

export default function Dashboard() {
  getStats();

  return (
    <div>
      <div className="enterUser">
        <SearchUser />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 eloChart">
            <EloChart />
          </div>
          <div className="col-lg-4 winrateChart">
            <WhiteWinrate />
          </div>
          <div className="col-lg-4 winrateChart">
            <BlackWinrate />
          </div>
        </div>
      </div>
    </div>
  );
}
