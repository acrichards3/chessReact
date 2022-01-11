import React from "react";
import EloChart from "./EloChart";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col eloChart">
            <h4 className="eloChartTitle">Elo Gain / Loss (Last 10 Games)</h4>
            <EloChart />
          </div>
        </div>
      </div>
    </div>
  );
}
